import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';
import { ConsumerService } from '../kafka/consumer.service';
import { KafkaModule } from '../kafka/kafka.module';
import { ProducerService } from '../kafka/producer.service';
import { AppController } from './app.controller';
import { AppRepository } from './app.repository';
import { AppService } from './app.service';
import { DatabasePrismaModule } from 'src/modules/database/database.module';
import { KartModule } from 'src/modules/kart/kart.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KafkaModule,
    DatabaseModule,
    DatabasePrismaModule,
    KartModule,
  ],
  providers: [
    ProducerService,
    AppRepository,
    ConsumerService,
    AppService,
  ],
  controllers: [AppController],
})
export class AppModule {}
