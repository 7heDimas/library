import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksDto, CreateBooksDto, UpdatebooksDto } from './books.dto';
import { Books } from '@prisma/client';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('/')
  public async createBook(
    @Request() req,
    @Body() createBook: CreateBooksDto,
  ): Promise<BooksDto> {
    return await this.booksService.createBook(createBook, req.author.id);
  }

  @Get('/')
  public async listBooks(): Promise<Books[]> {
    return await this.booksService.listBooks();
  }

  @Put('/:id')
  public async updateBook(
    @Param('id') id: string,
    @Body() updatebookDto: UpdatebooksDto,
  ): Promise<Books> {
    const bookId = Number.parseInt(id);
    return await this.booksService.updateBook(bookId, updatebookDto);
  }

  @Delete('/:id')
  public async deleteBook(@Param('id') id: string): Promise<Books> {
    const bookId = Number.parseInt(id);
    return await this.booksService.deleteBook(bookId);
  }

  @Get('/author/:authorId')
  public async listBooksByAuthor(
    @Param('authorId') authorId: string,
  ): Promise<Books[]> {
    const allBooksByAuthorId = Number.parseInt(authorId);
    return this.booksService.listBooksByAuthor(allBooksByAuthorId);
  }
}
