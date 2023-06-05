import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateReadersDto, UpdateReadersDto } from './readers.dto';
import { Readers } from '@prisma/client';

@Injectable()
export class ReadersService {
  constructor(private prisma: PrismaService) {}

  async createReader(app: CreateReadersDto): Promise<Readers> {
    return await this.prisma.readers.create({
      data: {
        firstName: app.firstName,
        lastName: app.lastName,
        address: app.address,
        phoneNumber: app.phoneNumber,
      },
    });
  }

  async listReaders(): Promise<Readers[]> {
    return await this.prisma.readers.findMany({
      orderBy: {
        lastName: 'asc',
      },
    });
  }

  async updateReader(
    readerId: number,
    updatedReaders: UpdateReadersDto,
  ): Promise<Readers> {
    return await this.prisma.readers.update({
      data: {
        firstName: updatedReaders.firstName,
        lastName: updatedReaders.lastName,
        address: updatedReaders.address,
        phoneNumber: updatedReaders.phoneNumber,
      },
      where: { id: readerId },
    });
  }

  async deleteReader(readerId: number): Promise<Readers> {
    return await this.prisma.readers.delete({ where: { id: readerId } });
  }
}
