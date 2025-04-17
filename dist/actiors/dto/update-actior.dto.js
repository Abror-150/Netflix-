"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateActiorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_actior_dto_1 = require("./create-actior.dto");
class UpdateActiorDto extends (0, mapped_types_1.PartialType)(create_actior_dto_1.CreateActiorDto) {
}
exports.UpdateActiorDto = UpdateActiorDto;
//# sourceMappingURL=update-actior.dto.js.map