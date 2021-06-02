import {Module} from "@nestjs/common";
import {ProductService} from "./context/product.service";
import {ProductController} from "./api/product.controller";
import {BadRequestError} from "../../infrastructure/errors/badRequestError";
import {ProductDataValidation} from "./context/productDataValidation";

@Module({
    providers:[
        ProductService,
        ProductDataValidation,
    ],
    controllers:[
        ProductController,
    ]
})
export class ProductModule {

}