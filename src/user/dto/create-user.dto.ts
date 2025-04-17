import { ApiProperty } from '@nestjs/swagger';
import { Rolee } from '../enum/en';

export class CreateUserDto {
  @ApiProperty({ example: 'alex' })
  userName: string;

  @ApiProperty({ example: '1234' })
  password: string;

  @ApiProperty({ enum: Rolee })
  role: Rolee;
}
