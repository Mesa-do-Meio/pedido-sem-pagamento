import { Body, Controller, HttpStatus, Param, Put, Res} from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductDto } from "./dto/product.dto";
import { Response } from 'express'
import { MathOperation } from "./model/math.operation.enum";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Put(":id_prod")
  async UpdateProduct(@Res() res: Response, @Param('id_prod') id: string, @Body() productDto: ProductDto){
    try{
        this.productService.ReservStock(productDto.id_prod, productDto.estoque_prod, MathOperation.Sub)
        return res.status(HttpStatus.OK).send("DEU CERTO!")
    }
    catch(e)
    {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(e)
    }
  }
}
