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
const APIDBModel_1 = __importDefault(require("../api/v1/APIDBModel"));
const ApiEntity_1 = __importDefault(require("../../entity/api/v1/ApiEntity"));
class DBModel extends EntityModel_1.default {
    constructor(props = { model: APIDBModel_1.default, entity: ApiEntity_1.default }) {
        super(props);
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('clear', {}, { natural: true });
        });
    }
}
exports.default = DBModel;
//# sourceMappingURL=DBModel.js.map