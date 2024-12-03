"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiEntity_1 = __importDefault(require("./ApiEntity"));
class ApiList extends ApiEntity_1.default {
    constructor(props) {
        super(props);
        this._items = props.items;
        this._pager = props.pager;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
    get pager() {
        return this._pager;
    }
    set pager(value) {
        this._pager = value;
    }
}
exports.default = ApiList;
//# sourceMappingURL=ApiList.js.map