import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  async countItens(idProdutos: any) {
    console.log('Contando itens dos produtos', idProdutos);
  }

  async reserveItens(idProdutos: any) {
    console.log('Reservando itens', idProdutos);
  }

  async releaseItens(idProdutos: any) {
    console.log('Liberando itens', idProdutos);
  }
}
