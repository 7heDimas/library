import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateBooksDto, UpdatebooksDto } from './books.dto';
import { Books } from '@prisma/client';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async createBook(app: CreateBooksDto, authorId: number): Promise<any> {
    return await this.prisma.books.create({
      data: {
        title: app.title,
        writingYear: app.writingYear,
        quantityCopies: app.quantityCopies,
        authorId,
      },
    });
  }

  async listBooks(): Promise<Books[]> {
    return await this.prisma.books.findMany({
      orderBy: {
        title: 'asc',
      },
    });
  }

  async updateBook(
    bookId: number,
    updatedBook: UpdatebooksDto,
  ): Promise<Books> {
    return await this.prisma.books.update({
      data: {
        title: updatedBook.title,
        writingYear: updatedBook.writingYear,
        quantityCopies: updatedBook.quantityCopies,
      },
      where: { id: bookId },
    });
  }

  async deleteBook(bookId: number): Promise<Books> {
    return await this.prisma.books.delete({ where: { id: bookId } });
  }

  async listBooksByAuthor(authorId: number): Promise<Books[]> {
    return await this.prisma.books.findMany({ where: { authorId: authorId } });
  }
}
