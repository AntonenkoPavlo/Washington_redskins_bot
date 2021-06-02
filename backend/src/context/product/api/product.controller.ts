import {Body, Controller, Get, Post, Query, Res} from "@nestjs/common";
import {Product} from "../../../infrastructure/obligations/product";
import {ProductService} from "../context/product.service";
import {Response} from "express";
import {SearchProductQuery} from "../../../infrastructure/obligations/searchProductQuery";
import {ProductDataValidation} from "../context/productDataValidation";
import {BadRequestError} from "../../../infrastructure/errors/badRequestError";


@Controller('api/product')
export class ProductController {
    private productService: ProductService
    constructor(
        private productDataValidation: ProductDataValidation,
    ) {
        this.productService = new ProductService()
    }

    @Post()
    createProduct(@Res() response:Response, @Body() data: Product){
        try {
            this.productDataValidation.validationDataToCreateProduct(data)
            this.productService.addProduct(data)
            return response.status(200).send();
        } catch (e) {
            if (e instanceof BadRequestError) {
                return response.status(400).send(e.message);
            }
        }
         return response.status(500).send();
    }

    @Get()
    getPruductByName(@Res() response:Response, @Query() data: SearchProductQuery){
        try {
            this.productDataValidation.validationDataToGetProductByName(data)
            const result = this.productService.searchProductByName(data.name);
            return response.status(200).send(result);
        } catch (e) {
            if (e instanceof BadRequestError) {
                return response.status(400).send(e.message);
            }
        }
        return response.status(500).send();
    }
}

