"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIEntityModel_1 = __importDefault(require("./APIEntityModel"));
const ApiSegmentation_1 = __importDefault(require("../../../entity/api/v1/ApiSegmentation"));
class APISegmentationModel extends APIEntityModel_1.default {
}
exports.default = new APISegmentationModel({
    path: 'v1.recombee.segmentation',
    entity: ApiSegmentation_1.default,
});
//# sourceMappingURL=APISegmentationModel.js.map