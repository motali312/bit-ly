import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateTaskDto {
  @ApiProperty({ 
    description: 'Name of the Task', example: 'Buy bread'
  })
  title: string;

  @ApiPropertyOptional({
    description: 'Description of the task', example: ''
  })
  description?: string;

  @ApiProperty({
    description: '', example: '2022-02-05T18:00:00'
  })
  date: string;
}
