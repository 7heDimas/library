import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateAuthorDto } from './author.dto';
import { Author } from '@prisma/client';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  async createAuthor(app: CreateAuthorDto): Promise<any> {
    return await this.prisma.author.create({
      data: {
        firstName: app.firstName,
        lastName: app.lastName,
      },
    });
  }

  async listAuthors(): Promise<Author[]> {
    return await this.prisma.author.findMany();
  }

  async updateAuthor(
    authorId: number,
    authorDto: CreateAuthorDto,
  ): Promise<Author> {
    return await this.prisma.author.update({
      data: {
        firstName: authorDto.firstName,
        lastName: authorDto.lastName,
      },
      where: { id: authorId },
    });
  }
}
