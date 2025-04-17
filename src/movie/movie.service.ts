import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './entities/movie.entity';
import { Model } from 'mongoose';

@Injectable()
export class MovieService {
  constructor(@InjectModel(Movie.name) private readonly movie: Model<Movie>) {}
  async create(createMovieDto: CreateMovieDto) {
    try {
      let data = await this.movie.create(createMovieDto);
      return data;
    } catch (error) {
      return error;
    }
  }

  async findAll(query: any) {
    try {
      let { name, sort = 'asc', page = 1, limit = 10 } = query;
      const filter: any = {};

      if (name) {
        filter.name = { $regex: name, $options: 'i' };
      }

      const sortOrder = sort === 'desc' ? -1 : 1;

      let movies = await this.movie
        .find(filter)
        .sort({ name: sortOrder })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();

      const total = await this.movie.countDocuments(filter);

      return { total, page: +page, limit: +limit, data: movies };
    } catch (error) {
      return { message: 'An error occurred', error };
    }
  }

  async findOne(id: string) {
    try {
      let data = await this.movie.findById(id);
      return data;
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    try {
      let data = await this.movie.findByIdAndUpdate(id, updateMovieDto, {
        new: true,
      });
      return data;
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      let data = await this.movie.findByIdAndDelete(id);
      return data;
    } catch (error) {
      return error;
    }
  }
}
