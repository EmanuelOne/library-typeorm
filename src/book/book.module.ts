import { Book } from './book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
