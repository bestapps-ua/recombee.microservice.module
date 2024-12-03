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
const APIModel_1 = __importDefault(require("./APIModel"));
const ApiList_1 = __importDefault(require("../../../entity/api/v1/ApiList"));
class APIEntityModel {
    constructor(props) {
        this._path = props.path;
        this._entity = props.entity;
    }
    get path() {
        return this._path;
    }
    set path(value) {
        this._path = value;
    }
    get entity() {
        return this._entity;
    }
    set entity(value) {
        this._entity = value;
    }
    action(name, params = {}, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield APIModel_1.default.call(`${this.path}.${name}`, params);
            //console.log('DATA', data);
            if (data.data['_type'] === 'list') {
                let items = [];
                for (const item of data.data.items || []) {
                    //@ts-ignore
                    items.push(new this.entity(item));
                }
                data.data.items = items;
                return new ApiList_1.default(data.data);
            }
            if (options.natural) {
                return data.data;
            }
            if (options.entity) {
                return new options.entity(data.data);
            }
            //@ts-ignore
            return new this.entity(data.data);
        });
    }
    generate() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = APIEntityModel;
//# sourceMappingURL=APIEntityModel.js.map