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
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/user/decarator/dec';
import { Rolee } from 'src/user/enum/en';
import { ApiQuery } from '@nestjs/swagger';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  @Roles(Rolee.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Get()
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Movie nom boyicha qidiruv',
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
    description: 'Har bir sahifada nechta natija korsatilsin',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Nechinchi sahifani korsatish',
    example: 1,
  })
  @Roles(Rolee.ADMIN, Rolee.USER)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  findAll(@Query() query: any) {
    return this.movieService.findAll(query);
  }

  @Get(':id')
  @Roles(Rolee.ADMIN, Rolee.USER)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.movieService.findOne(id);
  }

  @Patch(':id')
  @Roles(Rolee.ADMIN, Rolee.USER)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.update(id, updateMovieDto);
  }

  @Delete(':id')
  @Roles(Rolee.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.movieService.remove(id);
  }
}
