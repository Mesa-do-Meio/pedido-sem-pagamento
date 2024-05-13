import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";

@Module({
    controllers: [ProductController],
    providers: [ProductService],
//imports
    exports: [ProductService],
})

export class ProductModule {}