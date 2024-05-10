import { Body, Inject, Injectable } from '@nestjs/common';
import { KartDto } from './dto/kart.dto';
import {
  PrismaService,
  PrismaServiceToken,
} from 'src/modules/database/prisma.service';
import { ConsumerService } from 'src/kafka/consumer.service';
import { ProducerService } from 'src/kafka/producer.service';

@Injectable()
export class KartService {
  constructor(
    @Inject(PrismaServiceToken)
    private readonly prismaService: PrismaService,
    private readonly consumerService: ConsumerService,
    private readonly producerService: ProducerService
  ) {}

  async productSell(products: KartDto[]) {
    return await this.prismaService.produtos.findMany({
      where: {
        id_prod:
          products[0].typeProd +
          products[0].id_prod.toLocaleString('en-US', {
            minimumIntegerDigits: 3,
            useGrouping: false,
          }),
      },
    });
  }

}
