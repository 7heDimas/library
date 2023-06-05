import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './db/prisma.module';
import { AuthorModule } from './author/author.module';
import { BooksModule } from './books/books.module';
import { ReadersModule } from './readers/readers.module';
import { LendingModule } from './lending/lending.module';

@Module({
  imports: [PrismaModule, AuthorModule, BooksModule, ReadersModule, LendingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
