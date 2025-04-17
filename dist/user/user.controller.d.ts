import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserLoginDto } from './dto/create-userLogin.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(createUserDto: CreateUserDto): Promise<any>;
    login(data: CreateUserLoginDto): Promise<any>;
}
