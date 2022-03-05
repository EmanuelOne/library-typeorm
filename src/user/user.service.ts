import { User } from './user.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}
  async findAll() {
    return await this.repo.find();
  }
  async create(body: User) {
    const user = this.repo.create({
      email: body.email,
      password: body.password,
    });
    return await this.repo.save(user);
  }
  async findOne(id: string) {
    try {
      const user = await this.repo.findOne(id);
      return user;
    } catch (err) {
      throw new BadRequestException('Id not Valid');
    }
  }
}
