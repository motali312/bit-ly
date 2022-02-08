import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class FindOneTaskDto {
  @ApiProperty()
  @Length(24, 24)
  id: string;
}
