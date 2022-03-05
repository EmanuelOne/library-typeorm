import { UserDto } from './../user/dto/user.dto';
import { Book } from './book.entity';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private repo: Repository<Book>,
  ) {}

  //   Create a new book ==> POST /books
  async create(book: Book, user: UserDto): Promise<Book> {
    try {
      const res = this.repo.create({
        name: book.name,
        price: book.price,
        author: book.author,
        user: user,
      });
      return this.repo.save(res);
    } catch (err) {
      throw new BadRequestException(err);
      //   throw new BadRequestException()
    }
  }
  async findAll(): Promise<Book[]> {
    return await this.repo.find();
  }
  async findOne(id: string): Promise<Book> {
    try {
      const book = await this.repo.findOne(id);
      if (!book) {
        throw new NotFoundException('Book not found');
      }
      return book;
    } catch (err) {
      throw new NotFoundException('Book not found');
    }
  }
  async update(id: string, book: Book): Promise<Book> {
    try {
      const res = await this.repo.update(id, book);
      if (res.affected === 0) {
        throw new NotFoundException('Book not found');
      }
      return this.repo.findOne(id);
    } catch (err) {
      if (err.code === '22P02') {
        throw new BadRequestException('Invalid Id');
      }
      throw new BadRequestException(err);
    }
  }
  async deleteOne(id: string): Promise<Book> {
    try {
      const book = await this.repo.findOne(id);
      if (!book) {
        throw new NotFoundException('Book not found');
      }
      await this.repo.delete(id);
      return book;
    } catch (err) {
      throw new NotFoundException('Book not found');
    }
  }
}
