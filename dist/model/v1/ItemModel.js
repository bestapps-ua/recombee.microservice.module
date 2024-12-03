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
const ApiItem_1 = __importDefault(require("../../entity/api/v1/ApiItem"));
const APIItemModel_1 = __importDefault(require("../api/v1/APIItemModel"));
class ItemModel extends EntityModel_1.default {
    constructor(props = { model: APIItemModel_1.default, entity: ApiItem_1.default }) {
        super(props);
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('addItem', params, { natural: true });
        });
    }
    update(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('setItem', params, { natural: true });
        });
    }
    delete(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('deleteItem', params, { natural: true });
        });
    }
    getProperties() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('getItemProperties', {}, { natural: true });
        });
    }
    createProperty(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('addItemProperty', params, { natural: true });
        });
    }
    deleteProperty(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('deleteItemProperty', params, { natural: true });
        });
    }
    getProperty(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('getItemProperty', params, { natural: true });
        });
    }
}
exports.default = ItemModel;
//# sourceMappingURL=ItemModel.js.map