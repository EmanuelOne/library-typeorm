import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getAllUser() {
    return this.userService.findAll();
  }
  @Post()
  createUser(@Body() body: UserDto) {
    return this.userService.create(body);
  }
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
}
