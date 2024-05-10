import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { KartService } from './kart.service';
import { Response } from 'express';
import { productTypeEnum } from './enum/product_type.enum';

@Controller('kart')
export class KartController {
  constructor(private readonly kartService: KartService) {}

  @Get()
  async getAll(@Res() res: Response) {
    try {
      const rep = await this.kartService.productSell([
        {
          id_car: 1,
          id_prod: 2,
          typeProd: productTypeEnum.prod,
          qnt_prod_car: 2,
        },
      ]);

      return res.status(HttpStatus.OK).send(rep);
    } catch (e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
  }
}
