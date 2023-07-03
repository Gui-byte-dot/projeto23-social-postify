import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { SignInService } from './signin.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: SignInService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '4d8f41crfh23e83e17741a4a1c9ff8eb',
    });
  }

  async validate(payload: any) {
    const user = await this.authService.validateUser(payload.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    console.log(user);
    return user;
  }
}
