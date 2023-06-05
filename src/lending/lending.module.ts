import { Module } from '@nestjs/common';
import { LendingController } from './lending.controller';
import { LendingService } from './lending.service';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  controllers: [LendingController],
  providers: [LendingService, PrismaService],
})
export class LendingModule {}
