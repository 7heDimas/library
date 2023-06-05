import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LendingService } from './lending.service';
import { CreateLendingDto } from './lending.dto';
import { Lending } from '@prisma/client';

@Controller('lending')
export class LendingController {
  constructor(private readonly lendingService: LendingService) {}

  @Post('/:bookId/:readerId')
  public async createLending(
    @Param('bookId') bookId: string,
    @Param('readerId') readerId: string,
    @Body() createLending: CreateLendingDto,
  ): Promise<Lending> {
    const lendingsBookId = Number.parseInt(bookId);
    const lendingReaderId = Number.parseInt(readerId);
    return await this.lendingService.createLending(
      createLending,
      lendingsBookId,
      lendingReaderId,
    );
  }

  @Get('/')
  public async lendingsList(): Promise<Lending[]> {
    return await this.lendingService.lendingsList();
  }
}
