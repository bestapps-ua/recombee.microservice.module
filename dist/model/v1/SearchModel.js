"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EntityModel_1 = __importDefault(require("./EntityModel"));
const ApiSearch_1 = __importDefault(require("../../entity/api/v1/ApiSearch"));
const APISearchModel_1 = __importDefault(require("../api/v1/APISearchModel"));
class SearchModel extends EntityModel_1.default {
    constructor(props = { model: APISearchModel_1.default, entity: ApiSearch_1.default }) {
        super(props);
    }
    searchItems(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('searchItems', params, { natural: true });
        });
    }
    searchItemSegments(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('searchItemSegments', params, { natural: true });
        });
    }
}
exports.default = SearchModel;
//# sourceMappingURL=SearchModel.js.map