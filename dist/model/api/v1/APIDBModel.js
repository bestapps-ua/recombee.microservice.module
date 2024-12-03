"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIEntityModel_1 = __importDefault(require("./APIEntityModel"));
const ApiEntity_1 = __importDefault(require("../../../entity/api/v1/ApiEntity"));
class APIDBModel extends APIEntityModel_1.default {
}
exports.default = new APIDBModel({
    path: 'v1.recombee.db',
    entity: ApiEntity_1.default,
});
//# sourceMappingURL=APIDBModel.js.map