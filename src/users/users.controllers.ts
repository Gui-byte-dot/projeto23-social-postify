import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './schema/addUser';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  addUser(@Body() body: CreateUserDto) {
    return this.usersService.add(body);
  }
}