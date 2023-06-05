import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorDto, CreateAuthorDto, UptadeAuthorDto } from './author.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post('/')
  public async createAuthor(
    @Body() createAuthorDto: CreateAuthorDto,
  ): Promise<AuthorDto> {
    return await this.authorService.createAuthor(createAuthorDto);
  }

  @Get('/')
  public async listAuthor(): Promise<AuthorDto[]> {
    return await this.authorService.listAuthors();
  }

  @Put('/:id')
  public async updateAuthor(
    @Param('id') id: string,
    @Body() updateAuthor: UptadeAuthorDto,
  ): Promise<AuthorDto> {
    const updatedAuthorId = Number.parseInt(id);
    return await this.authorService.updateAuthor(updatedAuthorId, updateAuthor);
  }
}
