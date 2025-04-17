import { ApiProperty } from '@nestjs/swagger';

export class CreateActiorDto {
  @ApiProperty({ example: 'Tom Holland' })
  name: string;
  @ApiProperty({ example: 'string' })
  img: string;
}
