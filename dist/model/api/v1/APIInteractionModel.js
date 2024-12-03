"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIEntityModel_1 = __importDefault(require("./APIEntityModel"));
const ApiInteraction_1 = __importDefault(require("../../../entity/api/v1/ApiInteraction"));
class APIInteractionModel extends APIEntityModel_1.default {
}
exports.default = new APIInteractionModel({
    path: 'v1.recombee.interaction',
    entity: ApiInteraction_1.default,
});
//# sourceMappingURL=APIInteractionModel.js.map