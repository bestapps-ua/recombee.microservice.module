"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIEntityModel_1 = __importDefault(require("./APIEntityModel"));
const ApiUser_1 = __importDefault(require("../../../entity/api/v1/ApiUser"));
class APIUserModel extends APIEntityModel_1.default {
}
exports.default = new APIUserModel({
    path: 'v1.recombee.user',
    entity: ApiUser_1.default,
});
//# sourceMappingURL=APIUserModel.js.map