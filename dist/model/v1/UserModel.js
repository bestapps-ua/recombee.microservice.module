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
const ApiUser_1 = __importDefault(require("../../entity/api/v1/ApiUser"));
const APIUserModel_1 = __importDefault(require("../api/v1/APIUserModel"));
class UserModel extends EntityModel_1.default {
    constructor(props = { model: APIUserModel_1.default, entity: ApiUser_1.default }) {
        super(props);
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('addUser', params, { natural: true });
        });
    }
    update(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('setUser', params, { natural: true });
        });
    }
    delete(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('deleteUser', params, { natural: true });
        });
    }
    migrate(fromUid, toUid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('migrateUser', { fromUid, toUid }, { natural: true });
        });
    }
    getProperties() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('getUserProperties', {}, { natural: true });
        });
    }
    createProperty(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('addUserProperty', params, { natural: true });
        });
    }
    deleteProperty(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('deleteUserProperty', params, { natural: true });
        });
    }
    getProperty(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.action('getUserProperty', params, { natural: true });
        });
    }
}
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map