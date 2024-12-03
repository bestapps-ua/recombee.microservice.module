"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIEntityModel_1 = __importDefault(require("./APIEntityModel"));
const ApiRecommend_1 = __importDefault(require("../../../entity/api/v1/ApiRecommend"));
class APIRecommendModel extends APIEntityModel_1.default {
}
exports.default = new APIRecommendModel({
    path: 'v1.recombee.recommend',
    entity: ApiRecommend_1.default,
});
//# sourceMappingURL=APIRecommendModel.js.map