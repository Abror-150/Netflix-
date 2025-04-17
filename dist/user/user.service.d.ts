import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { CreateUserLoginDto } from './dto/create-userLogin.dto';
export declare class UserService {
    private readonly user;
    private readonly jwt;
    constructor(user: Model<User>, jwt: JwtService);
    register(data: CreateUserDto): Promise<any>;
    login(data: CreateUserLoginDto): Promise<any>;
}
