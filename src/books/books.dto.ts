import { IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateBooksDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  writingYear: number;

  @ApiProperty()
  @IsNotEmpty()
  quantityCopies: number;
}

export class BooksDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  writingYear: number;

  @ApiProperty()
  quantityCopies: number;
}

export class UpdatebooksDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  writingYear: number;

  @ApiProperty()
  @IsNotEmpty()
  quantityCopies: number;
}
