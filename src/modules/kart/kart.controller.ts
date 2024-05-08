import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { KartService } from './kart.service';
import { Response } from 'express';

@Controller('kart')
export class KartController {
  constructor(private readonly kartService: KartService) {}

  @Get()
  async getAll(@Res() res: Response) {
    try {
      const rep = await this.kartService.getAll();

      return res.status(HttpStatus.OK).send(rep);
    } catch (e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e);
    }
  }
}
