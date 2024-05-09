import { carrinhos } from './../../../prisma/src/prisma/client/index.d';
import { Body, Inject, Injectable } from '@nestjs/common';
import { KartDto } from './dto/kart.dto';
import {
  PrismaService,
  PrismaServiceToken,
} from 'src/modules/database/prisma.service';

@Injectable()
export class KartService{
  constructor(
    @Inject(PrismaServiceToken)
    private readonly prismaService: PrismaService,
  ) {}

  async getAll() {
    return await this.prismaService.carrinhos.findMany();
  }
}
