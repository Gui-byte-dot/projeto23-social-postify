import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePublicationDto } from './schema/addPublication';
import { validate } from 'class-validator';
import { Publication } from './entity/Publication';

@Injectable()
export class PublicationService {
  constructor(private prisma: PrismaService) {}
  


  async add(publicationData: CreatePublicationDto) {
    const publication = new CreatePublicationDto();
    publication.image = publicationData.image;
    publication.title = publicationData.title;
    publication.dateToPublish = publicationData.dateToPublish;
    publication.published = publicationData.published;
    publication.socialMedia = publicationData.socialMedia;



    const errors = await validate(publication);
    if (errors.length > 0) {
      throw new HttpException(
        { message: 'Validation failed', errors },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

   

    return this.prisma.client.publications.create({
      data: {
        image: publication.image,
        title: publication.title,
        dateToPublish: publication.dateToPublish,
        published: publication.published,
        socialMedia: publication.socialMedia
      },
    });
  }


  async findAllPublications() {
    return this.prisma.client.publications.findMany({

    });
  }


  
}
