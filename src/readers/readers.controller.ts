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
import { ReadersService } from './readers.service';
import { CreateReadersDto, UpdateReadersDto } from './readers.dto';
import { Readers } from '@prisma/client';

@Controller('readers')
export class ReadersController {
  constructor(private readonly readersService: ReadersService) {}

  @Post('/')
  public async createReader(
    @Body() createReaders: CreateReadersDto,
  ): Promise<CreateReadersDto> {
    return await this.readersService.createReader(createReaders);
  }

  @Get('/')
  public async listReaders(): Promise<Readers[]> {
    return await this.readersService.listReaders();
  }

  @Delete('/:id')
  public async deleteReader(@Param('id') id: string): Promise<Readers> {
    const deletedReadersId = Number.parseInt(id);
    return await this.readersService.deleteReader(deletedReadersId);
  }

  @Put('/:id')
  public async updateReader(
    @Param('id') id: string,
    @Body() updatedReader: UpdateReadersDto,
  ): Promise<Readers> {
    const updatedReaderId = Number.parseInt(id);
    return await this.readersService.updateReader(
      updatedReaderId,
      updatedReader,
    );
  }
}
