import { Body, Controller, Get, Post } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './schema/addPublication';

@Controller('publications')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Post()
  addPublication(@Body() body: CreatePublicationDto) {
    return this.publicationService.add(body);
  }

  @Get()
  findAllPublications() {
    return this.publicationService.findAllPublications();
  }
}