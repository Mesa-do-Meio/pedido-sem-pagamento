import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';
import { ConsumerService } from '../kafka/consumer.service';
import { KafkaModule } from '../kafka/kafka.module';
import { ProducerService } from '../kafka/producer.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KafkaModule,
    DatabaseModule,
  ],
  providers: [ProducerService, ConsumerService, AppService],
  controllers: [AppController],
})
export class AppModule { }
