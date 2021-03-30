import { Item } from './item.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getItems(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  async postItem(item: any): Promise<Item[]> {
    return await this.itemRepository.save(item);
  }

  async putItem(item: any): Promise<any> {
    return await this.itemRepository.update(item.id, item)
  }

  async deleteItem(id: number): Promise<any> {
    return await this.itemRepository.delete({ id });
  }
}
