import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { Consumer, ConsumerRunConfig, ConsumerSubscribeTopics, Kafka, KafkaMessage } from 'kafkajs';

@Injectable()
export class ConsumerService implements OnApplicationShutdown {
  private readonly kafka = new Kafka({
    brokers: process.env.KAFKA_BROKERS.split(','),
  });

  private readonly consumers: Consumer[] = []

  async consume(topic: string, groupId: string, callback: (message: KafkaMessage) => Promise<void>) {
    const consumer = this.kafka.consumer({ groupId: groupId, allowAutoTopicCreation: false });

    await consumer.connect();

    await consumer.subscribe({ topic });

    await consumer.run({
      autoCommit: true,
      autoCommitInterval: 100,
      eachMessage: async ({ message }) => {
        await callback(message);
      }

    });

    this.consumers.push(consumer);
  }

  async onApplicationShutdown(signal?: string) {
    for (const consumer of this.consumers) {
      await consumer.disconnect();
    }
  }
}
