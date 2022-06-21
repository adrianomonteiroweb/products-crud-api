import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [
    // new Product('LIV00001', 'Clean Code', 68.9),
    // new Product('LIV00002', 'Refactore', 55.9),
    // new Product('LIV00003', 'Clean Architecture', 68.9),
  ];

  getAll(): Product[] {
    return this.products;
  }

  getOne(id: number): Product {
    return this.products[0];
  }

  create(product: Product) {
    this.products.push(product);
  }

  update(product: Product) {
    return product;
  }

  delete(id: number) {
    this.products.pop();
  }
}
