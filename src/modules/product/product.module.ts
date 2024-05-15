import { Module } from "@nestjs/common";
import { DatabasePrismaModule } from "../database/database.module";
import { PrismaService } from "../database/prisma.service";
import { ProductService } from "./product.service";

@Module({
    imports: [DatabasePrismaModule],
    providers: [ProductService, PrismaService],
    exports: [ProductService],
})
export class ProductModule { }