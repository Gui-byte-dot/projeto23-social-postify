import { IsEmail, IsNotEmpty, IsString, Length, IsUrl, IsBoolean, IsDateString, IsDataURI, IsDate } from 'class-validator';

export class CreatePublicationDto {
    @IsNotEmpty()
    @IsString()
    image: string;
  
    @IsNotEmpty()
    @IsString()
    title: string;
   
    @IsNotEmpty()
    @IsString()
    dateToPublish: string;

    @IsNotEmpty()
    @IsBoolean()
    published: boolean;

    @IsNotEmpty()
    @IsString()
    socialMedia: string;
  }