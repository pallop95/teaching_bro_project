import { Item } from './item.entity';
import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  async getItems(): Promise<Item[]> {
    return await this.appService.getItems();
  }

  @Post()
  async post(
    @Res() res,
    @Body() item: any,
  ): Promise<Item[]> {
    return res.status(200).json(await this.appService.postItem(item));
  }

  @Put()
  async putDevice(
    @Res() res,
    @Body() item: any,
  ): Promise<Item> {

    return res.status(200).json(await this.appService.putItem(item));
  }

  @Delete('/:id')
  async deleteDevice(@Res() res, @Param('id') id: number): Promise<any> {
    return res.status(200).json(await this.appService.deleteItem(id));
  }
}
