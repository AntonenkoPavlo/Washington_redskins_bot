import {Injectable} from "@nestjs/common";
import {Product} from "../../../infrastructure/obligations/product";
import {BadRequestError} from "../../../infrastructure/errors/badRequestError";


@Injectable()
export class ProductDataValidation {

    validationDataToCreateProduct(productData: Product): void | Error{
        let errorMessage = '';

        if (!productData.hasOwnProperty('name' )) {
            errorMessage += 'Property Name is required !!!\n';
        }
        if (!productData.hasOwnProperty('price' )) {
            errorMessage += 'Property Price is required !!!\n';
        }
        if (typeof productData.name !== "string") {
            errorMessage += 'Property Name must be string!'
        } else if (productData.name.trim() == '') {
            errorMessage += "Property Name shouldn't be empty"
        }
        if (typeof productData.price !== 'number') {
            errorMessage += 'Property Price must be number!'
        } else if (productData.price <= 0) {
            errorMessage += 'Property Price must be number>0!'
        }

        if (errorMessage !== '') {
            throw new BadRequestError(errorMessage);
        }
    }


    validationDataToGetProductByName(productData: Pick<Product,'name'>): void | Error {
        let errorMessage = '';

        if (!productData.hasOwnProperty('name' )) {
            errorMessage += 'Property Name is required !!!\n';
        }
        if (typeof productData.name !== "string") {
            errorMessage += 'Property Name must be string!'
        } else if (productData.name.trim() == '') {
            errorMessage += "Property Name shouldn't be empty"
        }
        if (errorMessage !== '') {
            throw new BadRequestError(errorMessage);
        }
    }
}