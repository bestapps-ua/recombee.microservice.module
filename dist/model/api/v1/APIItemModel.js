"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiItem_1 = __importDefault(require("../../../entity/api/v1/ApiItem"));
const APIEntityModel_1 = __importDefault(require("./APIEntityModel"));
class APIItemModel extends APIEntityModel_1.default {
}
exports.default = new APIItemModel({
    path: 'v1.recombee.item',
    entity: ApiItem_1.default,
});
//# sourceMappingURL=APIItemModel.js.map