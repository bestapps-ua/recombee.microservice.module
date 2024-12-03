"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIEntityModel_1 = __importDefault(require("./APIEntityModel"));
const ApiSearch_1 = __importDefault(require("../../../entity/api/v1/ApiSearch"));
class APISearchModel extends APIEntityModel_1.default {
}
exports.default = new APISearchModel({
    path: 'v1.recombee.search',
    entity: ApiSearch_1.default,
});
//# sourceMappingURL=APISearchModel.js.map