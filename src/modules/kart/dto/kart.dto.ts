import { productTypeEnum } from '../enum/product_type.enum';

export interface KartDto {
  id_car: number;
  id_prod: number;
  typeProd: productTypeEnum;
  qnt_prod_car: number;
}

interface Product {
  id: string;
  description: string;
  nome: string;
  qnt: number;
  preco: number;
  desc: number;
}
export interface SellProductDto {
  cpfCliente: string;
  tipoPagamento: { id: number; data: any; name: string };
  produtos: Product[];
}
