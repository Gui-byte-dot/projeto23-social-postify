import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './users.controllers';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService]
})
export class UsersModule {}