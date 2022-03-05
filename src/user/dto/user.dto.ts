import { Book } from './../../book/book.entity';
import { IsEmail, IsEmpty, MinLength } from 'class-validator';
export class UserDto {
  @IsEmail()
  email: string;
  @MinLength(8)
  password: string;
  @IsEmpty({ message: 'Field not allow' })
  id: string;
  @IsEmpty()
  books?: Book[];
}
