import { Body, Inject, Injectable } from '@nestjs/common';
import { SellProductDto } from './dto/kart.dto';
import {
  PrismaService,
  PrismaServiceToken,
} from 'src/modules/database/prisma.service';
import { ConsumerService } from 'src/kafka/consumer.service';
import { ProducerService } from 'src/kafka/producer.service';

@Injectable()
export class KartService {
  constructor(
    @Inject(PrismaServiceToken)
    private readonly prismaService: PrismaService,
    private readonly consumerService: ConsumerService,
    private readonly producerService: ProducerService,
  ) {}

  async productSell(products: any) {
    try {
      const productsToSell: SellProductDto = {
        cpfCliente: products['cpfCliente'],
        produtos: products['produtos'],
        tipoPagamento: {
          id: products['tipoPagamento']['id'],
          name: products['tipoPagamento']['name'],
          data: products['tipoPagamento']['data'],
        },
      };

      await this.producerService.sendMessage('carrinho', productsToSell);
    } catch (e) {
      throw e;
    }
  }
}
