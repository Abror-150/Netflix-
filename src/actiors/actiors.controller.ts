import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ActiorsService } from './actiors.service';
import { CreateActiorDto } from './dto/create-actior.dto';
import { UpdateActiorDto } from './dto/update-actior.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/user/decarator/dec';
import { Rolee } from 'src/user/enum/en';
import { ApiQuery } from '@nestjs/swagger';

@Controller('actiors')
export class ActiorsController {
  constructor(private readonly actiorsService: ActiorsService) {}

  @Post()
  @Roles(Rolee.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  create(@Body() createActiorDto: CreateActiorDto) {
    return this.actiorsService.create(createActiorDto);
  }

  @Get()
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Actior ismi boyicha qidiruv',
    example: 'Ali',
  })
  @ApiQuery({
    name: 'sortOrder',
    required: false,
    description: 'Sort tartibi: asc yoki desc',
    example: 'asc',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Har bir sahifada nechta natija ko‘rsatilsin',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Nechinchi sahifani ko‘rsatish',
    example: 1,
  })
  @Roles(Rolee.ADMIN, Rolee.USER)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  findAll(@Query() query: any) {
    return this.actiorsService.findAll(query);
  }

  @Get(':id')
  @Roles(Rolee.ADMIN, Rolee.USER)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.actiorsService.findOne(id);
  }

  @Patch(':id')
  @Roles(Rolee.ADMIN, Rolee.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateActiorDto: UpdateActiorDto) {
    return this.actiorsService.update(id, updateActiorDto);
  }

  @Delete(':id')
  @Roles(Rolee.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.actiorsService.remove(id);
  }
}
