import { IsBoolean, IsDate, IsDecimal, IsInt, IsString } from "class-validator"

export class ProductDto {
    // @IsInt()
    // id_ped: number;

    // @IsDate()
    // data_ped: Date;

    // @IsInt()
    // cpf_cli: number;

    // @IsInt()
    // id_car_ped: number;

    // @IsDecimal()
    // valor_ped: number;

    // @IsString()
    // transp_ped: string;

    // @IsString()
    // rastreio_ped: string;

    // @IsString()
    // end_entrega_ped: String;

    // @IsBoolean()
    // ped_sem_pgto: Boolean;   

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