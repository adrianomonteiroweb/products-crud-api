import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'All products list';
  }

  @Get(':id')
  getOne(@Param() params): string {
    return `Product ${params.id}`;
  }
}
