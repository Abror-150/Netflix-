import { Injectable } from '@nestjs/common';
import { CreateActiorDto } from './dto/create-actior.dto';
import { UpdateActiorDto } from './dto/update-actior.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Actior } from './entities/actior.entity';
import { Model } from 'mongoose';

@Injectable()
export class ActiorsService {
  constructor(@InjectModel(Actior.name) private actior: Model<Actior>) {}
  async create(createActiorDto: CreateActiorDto) {
    try {
      let data = await this.actior.create(createActiorDto);
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

      let actiors = await this.actior
        .find(filter)
        .sort({ name: sortOrder })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean();

      const total = await this.actior.countDocuments(filter);

      return { total, page: +page, limit: +limit, data: actiors };
    } catch (error) {
      return { message: 'An error occurred', error };
    }
  }

  async findOne(id: string) {
    try {
      let data = await this.actior.findById(id);
      return data;
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateActiorDto: UpdateActiorDto) {
    try {
      let data = await this.actior.findByIdAndUpdate(id, updateActiorDto, {
        new: true,
      });
      return data;
    } catch (error) {
      return error;
    }
  }

  async remove(id: string) {
    try {
      let data = await this.actior.findByIdAndDelete(id);
      return data;
    } catch (error) {
      return error;
    }
  }
}
