import { Module } from '@nestjs/common';
import { ConsumerService } from 'src/kafka/consumer.service';
import { ProducerService } from 'src/kafka/producer.service';

@Module({
  providers: [ConsumerService, ProducerService],
  exports: [ConsumerService, ProducerService],
})
export class KafkaModule { }
