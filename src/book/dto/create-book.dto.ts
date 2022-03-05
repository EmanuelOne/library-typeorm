import { User } from './../../user/user.entity';
import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsNotEmpty()
  @IsString()
  author: string;
  @IsEmpty({ message: 'This field is not allowed' })
  id: string;
  @IsEmpty()
  user: User;
}
