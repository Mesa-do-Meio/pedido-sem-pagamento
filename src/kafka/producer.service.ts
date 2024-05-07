import { Injectable, OnApplicationShutdown, OnModuleInit } from '@nestjs/common';
import { IHeaders, Kafka, Message, Producer } from 'kafkajs';

@Injectable()
export class ProducerService implements OnModuleInit, OnApplicationShutdown {
  private readonly kafka = new Kafka({
    brokers: ['localhost:9091', 'localhost:9092', 'localhost:9093'],
  });

  private readonly producer: Producer = this.kafka.producer();

  async onModuleInit() {
    await this.producer.connect();
  }

  async sendMessage(topic: string, payload: any, key?: string, headers?: IHeaders) {
    await this.producer.send({
      topic,
      messages: [{
        key,
        value: JSON.stringify(payload),
        headers,
      }]
    });
  }

  async onApplicationShutdown(signal?: string) {
    await this.producer.disconnect();
  }
}
