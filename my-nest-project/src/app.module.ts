import { Item } from './item.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item]),
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "username": "adminja",
      "password": "adminja!",
      "database": "this_is_database",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
