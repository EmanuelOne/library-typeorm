import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './book.entity';
import { BookService } from './book.service';
import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

@Controller('books')
export class BookController {
  constructor(private bookservice: BookService) {}

  @Post()
  create(@Body() book: CreateBookDto): Promise<Book> {
    const user = {
      id: '4b0a41f8-a35a-414d-bd69-a1d161b32319',
      email: 'Josh_Prosacco86@yahoo.com',
      password: 'GSDcJ7myUphLDZM',
    };
    return this.bookservice.create(book, user);
  }
  @Get()
  findAll(): Promise<Book[]> {
    return this.bookservice.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Book> {
    return this.bookservice.findOne(id);
  }
  @Put(':id')
  update(@Body() book: UpdateBookDto, @Param('id') id: string): Promise<Book> {
    return this.bookservice.update(id, book);
  }
  @Delete(':id')
  deleteOne(@Param('id') id: string): Promise<Book> {
    return this.bookservice.deleteOne(id);
  }
}
