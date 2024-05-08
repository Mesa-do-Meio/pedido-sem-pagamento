import { Module } from '@nestjs/common';
import { DatabasePrismaModule } from '../database/database.module';
import { KartController } from './kart.controller';
import { KartService } from './kart.service';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [KartController],
  providers: [KartService],
  imports: [
    DatabasePrismaModule,
    // KafkaModule
  ],
  exports: [KartService],
})
export class KartModule {}
