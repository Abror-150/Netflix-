"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    user;
    jwt;
    constructor(user, jwt) {
        this.user = user;
        this.jwt = jwt;
    }
    async register(data) {
        try {
            let { userName, password } = data;
            let user = await this.user.findOne({ userName });
            if (user) {
                throw new common_1.BadRequestException('user already exists');
            }
            let hash = bcrypt.hashSync(password, 10);
            let newUser = await this.user.create({
                userName: data.userName,
                password: hash,
                role: data.role,
            });
            return newUser;
        }
        catch (error) {
            return error;
        }
    }
    async login(data) {
        try {
            let { userName } = data;
            let user = await this.user.findOne({ userName });
            if (!user) {
                throw new common_1.BadRequestException('user not exists');
            }
            let match = bcrypt.compareSync(data.password, user.password);
            if (!match) {
                throw new common_1.BadRequestException('wrong password');
            }
            let token = this.jwt.sign(user.id);
            return { token };
        }
        catch (error) {
            return error;
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map