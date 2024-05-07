import { Injectable, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { KafkaMessage } from 'kafkajs';
import { DatabaseService } from 'src/database/database.service';
import { ConsumerService } from 'src/kafka/consumer.service';
import { ProducerService } from 'src/kafka/producer.service';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(
    private readonly producerService: ProducerService,
    private readonly consumerService: ConsumerService,
    private readonly database: DatabaseService,
    private readonly appRepository: AppRepository
  ) { }

  async getHealth() {
    return this.appRepository.getHealth();
  }

  async onApplicationBootstrap() {
    setTimeout(async () => {
      for (const topic of process.env.TOPICS.split(',')) {
        console.log('Consumindo tópico', topic)
        await this.consumerService.consume(topic, topic, this.handleMessage)
      }
    }, 0)
  }

  async handleMessage(props: any) {
    console.log('Mensagem recebida!!!', props.message.value.toString())
  }
}
