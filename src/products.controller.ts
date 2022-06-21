import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product('LIV00001', 'Clean Code', 68.9),
    new Product('LIV00002', 'Refactore', 55.9),
    new Product('LIV00003', 'Clean Architecture', 68.9),
  ];

  @Get()
  getAll(): Product[] {
    return this.products;
  }

  @Get(':id')
  getOne(@Param() params): Product {
    console.log(this.products.find((product) => product.id === params.id));

    return this.products.find((product) => product.id === params.id);
  }

  @Post()
  create(@Body() product: Product) {
    product.id = this.products.length + 1;
    this.products.push(product);
  }

  @Put()
  update(@Body() product): object {
    return product;
  }

  @Delete(':id')
  delete(@Param() params): object {
    return { id: params.id };
  }
}
