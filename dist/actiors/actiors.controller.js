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
exports.ActiorsController = void 0;
const common_1 = require("@nestjs/common");
const actiors_service_1 = require("./actiors.service");
const create_actior_dto_1 = require("./dto/create-actior.dto");
const update_actior_dto_1 = require("./dto/update-actior.dto");
const auth_guard_1 = require("../auth/auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const dec_1 = require("../user/decarator/dec");
const en_1 = require("../user/enum/en");
const swagger_1 = require("@nestjs/swagger");
let ActiorsController = class ActiorsController {
    actiorsService;
    constructor(actiorsService) {
        this.actiorsService = actiorsService;
    }
    create(createActiorDto) {
        return this.actiorsService.create(createActiorDto);
    }
    findAll(query) {
        return this.actiorsService.findAll(query);
    }
    findOne(id) {
        return this.actiorsService.findOne(id);
    }
    update(id, updateActiorDto) {
        return this.actiorsService.update(id, updateActiorDto);
    }
    remove(id) {
        return this.actiorsService.remove(id);
    }
};
exports.ActiorsController = ActiorsController;
__decorate([
    (0, common_1.Post)(),
    (0, dec_1.Roles)(en_1.Rolee.ADMIN),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_actior_dto_1.CreateActiorDto]),
    __metadata("design:returntype", void 0)
], ActiorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({
        name: 'name',
        required: false,
        description: 'Actior ismi boyicha qidiruv',
        example: 'Ali',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'sortOrder',
        required: false,
        description: 'Sort tartibi: asc yoki desc',
        example: 'asc',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        required: false,
        description: 'Har bir sahifada nechta natija ko‘rsatilsin',
        example: 10,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        required: false,
        description: 'Nechinchi sahifani ko‘rsatish',
        example: 1,
    }),
    (0, dec_1.Roles)(en_1.Rolee.ADMIN, en_1.Rolee.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ActiorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, dec_1.Roles)(en_1.Rolee.ADMIN, en_1.Rolee.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActiorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, dec_1.Roles)(en_1.Rolee.ADMIN, en_1.Rolee.SUPER_ADMIN),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_actior_dto_1.UpdateActiorDto]),
    __metadata("design:returntype", void 0)
], ActiorsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, dec_1.Roles)(en_1.Rolee.ADMIN),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActiorsController.prototype, "remove", null);
exports.ActiorsController = ActiorsController = __decorate([
    (0, common_1.Controller)('actiors'),
    __metadata("design:paramtypes", [actiors_service_1.ActiorsService])
], ActiorsController);
//# sourceMappingURL=actiors.controller.js.map