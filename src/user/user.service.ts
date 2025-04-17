import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateUserLoginDto } from './dto/create-userLogin.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly user: Model<User>,
    private readonly jwt: JwtService,
  ) {}
  async register(data: CreateUserDto) {
    try {
      let { userName, password } = data;
      let user = await this.user.findOne({ userName });
      if (user) {
        throw new BadRequestException('user already exists');
      }
      let hash = bcrypt.hashSync(password, 10);
      let newUser = await this.user.create({
        userName: data.userName,
        password: hash,
        role: data.role,
      });
      return newUser;
    } catch (error) {
      return error;
    }
  }
  async login(data: CreateUserLoginDto) {
    try {
      let { userName } = data;
      let user = await this.user.findOne({ userName });
      if (!user) {
        throw new BadRequestException('user not exists');
      }
      let match = bcrypt.compareSync(data.password, user.password);
      if (!match) {
        throw new BadRequestException('wrong password');
      }
      let token = this.jwt.sign(user.id);
      return { token };
    } catch (error) {
      return error;
    }
  }
}
