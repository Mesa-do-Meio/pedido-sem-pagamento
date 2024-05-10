import { BadRequestException, Inject, Injectable, InternalServerErrorException, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { ProducerService } from 'src/kafka/producer.service';
import {
    PrismaService,
    PrismaServiceToken,
  } from 'src/modules/database/prisma.service';
import { MathOperation } from './model/math.operation.enum';

@Injectable()
export class ProductService {
    constructor(
        @Inject(PrismaServiceToken)
        private readonly prismaService: PrismaService,
        private readonly producerService: ProducerService
    ){}

    async ReservStock(productId: string, qnt_prod_car: number, operation: MathOperation){
        const initialProd = await this.prismaService.produtos.findFirst({where: {id_prod: productId}})

        if(!initialProd)
            throw new NotFoundException('Produto não encontrado');

        if(initialProd.estoque_prod - qnt_prod_car < 0)
            throw new NotAcceptableException("Não há produtos suficientes no estoque."); 

        let resultEsq = this.DoMathOperation(initialProd.estoque_prod, qnt_prod_car, operation) 

        await this.prismaService.produtos.update({
            where: {"id_prod": initialProd.id_prod},
            data: {
                estoque_prod: resultEsq
            }
        })

        return true;
    }

    private DoMathOperation(num1: number, num2: number, operation: MathOperation){
        let result = 0;
        switch(operation){
            case MathOperation.Soma:
                result = num1 + num2;
                break;
            case MathOperation.Sub:
                result = num1 - num2;
                break;
            case MathOperation.Div:
                result = num1 / num2;
                break;
            case MathOperation.Soma:
                result = num1 * num2;
                break;
            default:
                throw new InternalServerErrorException("Operador Inválido")
        }

        return result;
    }
}