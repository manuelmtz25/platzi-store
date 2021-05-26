import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint() {
    return 'nuevo endpoint MMA';
  }

  // http://localhost:3000/hello
  @Get('/hello/')
  hello() {
    return 'Hello MMA';
  }

  @Get('products/filter')
  getProductFilter() {
    return `Soy un filter`;
  }

  // @Get('products/:productId')
  // getProduct(@Param() params: any) {
  //   return `product ${params.productId}`;
  // }

  // http://localhost:3000/products/prod1
  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  // http://localhost:3000/categories/cat1/products/prod1
  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }

  // @Get('products')
  // getProducts(@Query() params: any) {
  //   const { limit, offset } = params;
  //   return `products: limit => ${limit} offset => ${offset} `;
  // }

  // http://localhost:3000/products/?limit=100&offset=200
  // @Get('products')
  // getProducts(@Query('limit') limit: number, @Query('offset') offset: number) {
  //   return `products: limit => ${limit} offset => ${offset} `;
  // }

  // http://localhost:3000/products/?limit=100
  // dar un valor por default
  @Get('products')
  getProducts(@Query('limit') limit: number, @Query('offset') offset = 44) {
    return `products: limit => ${limit} offset => ${offset} `;
  }
}
