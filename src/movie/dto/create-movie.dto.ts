import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({ example: 'Avengers' })
  name: string;
  @ApiProperty({ example: 'string' })
  img: string;
}
