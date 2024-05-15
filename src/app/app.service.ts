import { Injectable, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { KafkaMessage } from 'kafkajs';
import { catchError } from 'rxjs';
import { DatabaseService } from 'src/database/database.service';
import { ConsumerService } from 'src/kafka/consumer.service';
import { ProducerService } from 'src/kafka/producer.service';
import { SellProductDto } from 'src/modules/kart/dto/kart.dto';
import { KartService } from 'src/modules/kart/kart.service';
import { MathOperation } from 'src/modules/product/model/math.operation.enum';
import { ProductService } from 'src/modules/product/product.service';
import PaymentEvent from './dto/app.dto';

@Injectable()
export class AppService implements OnApplicationBootstrap {

  private readonly topics: string[]

  constructor(
    private readonly consumerService: ConsumerService,
    private readonly producerService: ProducerService,
    private readonly productService: ProductService,
  ) {
    this.topics = process.env.KAFKA_CONSUMER_TOPICS.split(',')
    this.handleMessage = this.handleMessage.bind(this);
  }

  async onApplicationBootstrap() {
    setTimeout(async () => {
      for (const topic of this.topics) {
        await this.consumerService.consume(topic, topic, this.handleMessage)
      }
    }, 0)
  }

  async handleMessage(message: KafkaMessage, topic: string) {
    switch (topic) {
      case 'order': {
        const kart: SellProductDto = JSON.parse(message.value.toString())
        try {
          for (const product of kart.produtos) {
            await this.productService.ReservStock(product.id, product.qnt, MathOperation.Sub)
          }

          const payload: PaymentEvent = {
            type: process.env.KAFKA_PAYMENT_EVENT,
            data: kart
          }
          await this.producerService.sendMessage(process.env.KAFKA_PRODUCER_TOPIC_PAYMENT, payload)
        } catch (e) {
          console.error(e)
          break;
        }

        break;
      }
      case 'status_pgto': {
        const payment: PaymentEvent = JSON.parse(message.value.toString())
        try {
          switch (payment.type) {
            case 'PAYMENT_APPROVED':
              await this.producerService.sendMessage(process.env.KAFKA_PRODUCER_TOPIC_COD_RASTREIO, payment.data)
              break;
            case 'PAYMENT_DENIED':
              for (const product of payment.data.produtos) {
                await this.productService.ReservStock(product.id, product.qnt, MathOperation.Soma)
              }
              break;
            default:
              console.error(`Payment type ${payment.type} not found`)
          }
        } catch (e) { }

        break;
      }
      case 'cod_rastreio': {
        console.log(JSON.parse(message.value.toString()))
        break;
      }
      default: {
        console.error(`Topic ${topic} not found`)
      }
    }
  }
}
