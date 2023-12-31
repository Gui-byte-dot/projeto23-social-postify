import { Controller, Post, Body } from '@nestjs/common';
import { SignInService } from './signin.service';
import {AddSignin} from './schema/addSignin';
import { UsersService } from 'src/users/user.service';

@Controller('sign-in')
export class SignInController {
  constructor(private readonly authService: SignInService) {}

  @Post()
  async signIn(@Body() body: AddSignin) {
    const token = await this.authService.generateToken(body);
    return token;
  }
}
