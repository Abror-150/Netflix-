import { PartialType } from '@nestjs/mapped-types';
import { CreateActiorDto } from './create-actior.dto';

export class UpdateActiorDto extends PartialType(CreateActiorDto) {}
