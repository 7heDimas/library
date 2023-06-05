import { IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateLendingDto {
  @ApiProperty()
  @IsNotEmpty()
  issueDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  returnDate: Date;
}

export class LendingDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  issueDate: Date;

  @ApiProperty()
  returnDate: Date;
}
