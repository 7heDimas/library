import { Module } from '@nestjs/common';
import { ReadersController } from './readers.controller';
import { ReadersService } from './readers.service';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  controllers: [ReadersController],
  providers: [ReadersService, PrismaService],
})
export class ReadersModule {}
