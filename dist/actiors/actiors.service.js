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
exports.ActiorsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const actior_entity_1 = require("./entities/actior.entity");
const mongoose_2 = require("mongoose");
let ActiorsService = class ActiorsService {
    actior;
    constructor(actior) {
        this.actior = actior;
    }
    async create(createActiorDto) {
        try {
            let data = await this.actior.create(createActiorDto);
            return data;
        }
        catch (error) {
            return error;
        }
    }
    async findAll(query) {
        try {
            let { name, sort = 'asc', page = 1, limit = 10 } = query;
            const filter = {};
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
        }
        catch (error) {
            return { message: 'An error occurred', error };
        }
    }
    async findOne(id) {
        try {
            let data = await this.actior.findById(id);
            return data;
        }
        catch (error) {
            return error;
        }
    }
    async update(id, updateActiorDto) {
        try {
            let data = await this.actior.findByIdAndUpdate(id, updateActiorDto, {
                new: true,
            });
            return data;
        }
        catch (error) {
            return error;
        }
    }
    async remove(id) {
        try {
            let data = await this.actior.findByIdAndDelete(id);
            return data;
        }
        catch (error) {
            return error;
        }
    }
};
exports.ActiorsService = ActiorsService;
exports.ActiorsService = ActiorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(actior_entity_1.Actior.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ActiorsService);
//# sourceMappingURL=actiors.service.js.map