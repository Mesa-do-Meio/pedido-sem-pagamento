import { Global, Module } from '@nestjs/common';
import { PrismaService, PrismaServiceToken } from './prisma.service';

@Global()
@Module({
  providers: [
    {
      provide: PrismaServiceToken,
      useClass: PrismaService,
    },
  ],
  exports: [PrismaServiceToken],
})
export class DatabasePrismaModule {}
