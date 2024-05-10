import { Module } from '@nestjs/common';
import { DatabasePrismaModule } from '../database/database.module';
import { KartController } from './kart.controller';
import { KartService } from './kart.service';
import { PrismaService } from '../database/prisma.service';
import { KafkaModule } from 'src/kafka/kafka.module';

@Module({
  controllers: [KartController],
  providers: [KartService],
  imports: [
    DatabasePrismaModule,
    KafkaModule,
    // KafkaModule
  ],
  exports: [KartService],
})
export class KartModule {}
