import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/user.module';
import { SignInModule } from './sign-in/signin.module';
import { PublicationsModule } from './publications/publication.module';


@Module({
  imports: [UsersModule, SignInModule, PublicationsModule],
  providers: [PrismaService],
})
export class AppModule {}
