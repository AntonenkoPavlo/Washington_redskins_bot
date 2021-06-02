import {Injectable} from "@nestjs/common";
import {Product} from "../../../infrastructure/obligations/product";



@Injectable()
export class ProductService {
    private products: Product[] = [];

    addProduct(productData: Product) {
        this.products.push(productData)
    }

    searchProductByName(productName: string): Product | undefined {
        return this.products.find((data) => data.name === productName)
    }
}
