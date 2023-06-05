import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateLendingDto } from './lending.dto';
import { Lending } from '@prisma/client';

@Injectable()
export class LendingService {
  constructor(private prisma: PrismaService) {}

  async createLending(
    app: CreateLendingDto,
    bookId: number,
    readerId: number,
  ): Promise<any> {
    return this.prisma.lending.create({
      data: {
        issueDate: app.issueDate,
        returnDate: app.returnDate,
        bookId,
        readerId,
      },
    });
  }

  async lendingsList(): Promise<Lending[]> {
    return this.prisma.lending.findMany();
  }
}
