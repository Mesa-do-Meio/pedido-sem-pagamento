import { IsBoolean, IsDate, IsDecimal, IsInt, IsString } from "class-validator"

export class ProductDto {
    @IsInt()
    id_prod: string;

    @IsString()
    nome_prod: string;
    
    @IsString()
    tipo_prod: string;

    @IsString()
    descr_prod: string;

    @IsDecimal()
    valor_venda_prod: number;

    @IsDecimal()
    estoque_prod: number;

    @IsDecimal()
    custo_prod: number;
}