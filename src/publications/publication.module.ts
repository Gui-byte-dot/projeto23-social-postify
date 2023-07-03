import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PrismaService } from '../prisma.service';
import { PublicationController } from './publication.controller';

@Module({
  controllers: [PublicationController],
  providers: [PublicationService, PrismaService]
})
export class PublicationsModule {}