import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabasePrismaModule } from 'src/modules/database/database.module';
import { KartModule } from 'src/modules/kart/kart.module';
import { ProductModule } from 'src/modules/product/product.module';
import { ProductService } from 'src/modules/product/product.service';
import { DatabaseModule } from '../database/database.module';
import { ConsumerService } from '../kafka/consumer.service';
import { KafkaModule } from '../kafka/kafka.module';
import { ProducerService } from '../kafka/producer.service';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KafkaModule,
    DatabaseModule,
    DatabasePrismaModule,
    KartModule,
    ProductModule,
  ],
  providers: [
    ProducerService,
    ConsumerService,
    AppService,
    ProductService,
  ],
})
export class AppModule { }
