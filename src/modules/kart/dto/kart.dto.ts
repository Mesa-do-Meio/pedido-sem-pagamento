import { productTypeEnum } from "../enum/product_type.enum";

export interface KartDto {
  id_car: number;
  id_prod: number;
  typeProd: productTypeEnum;
  qnt_prod_car: number;
}
