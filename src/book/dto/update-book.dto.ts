import { User } from './../../user/user.entity';
export class UpdateBookDto {
  name: string;
  price: number;
  author: string;
  id: string;
  user: User;
}
