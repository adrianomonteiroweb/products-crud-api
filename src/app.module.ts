import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './products/product.model';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'adriano',
      password: '12345678',
      database: 'library',
      autoLoadModels: true, // Reconhecer modelos do projeto automaticamente
      synchronize: true, // importa módulo automaticamente ao subir a aplicação e sincronizar
    }),
    SequelizeModule.forFeature([Product]), // informa o model
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
