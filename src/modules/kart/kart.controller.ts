import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { KartService } from './kart.service';
import { Response } from 'express';
import { productTypeEnum } from './enum/product_type.enum';
import { SellProductDto } from './dto/kart.dto';

@Controller('kart')
export class KartController {
  constructor(private readonly kartService: KartService) {}

  @Post()
  async getAll(@Res() res: Response, @Body() body: SellProductDto) {
    try {
      const rep = await this.kartService.productSell(body);

      return res.status(HttpStatus.OK).send(rep);
    } catch (e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
  }
}
