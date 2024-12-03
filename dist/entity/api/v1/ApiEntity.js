"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const console = __importStar(require("console"));
class ApiEntity {
    constructor(props) {
        try {
            this._created = props.created;
            this.__type = props._type;
            this._data = props.data || {};
            this._system = props._system;
            this._props = props;
        }
        catch (err) {
            console.log('[err init entity]', { err, name: this.getClassName() });
            throw err;
        }
    }
    getClassName() {
        let name = this.constructor.name;
        name = name.charAt(0).toLowerCase() + name.slice(1);
        return name;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
    get created() {
        return this._created;
    }
    set created(value) {
        this._created = value;
    }
    get internalType() {
        return this.__type;
    }
    get system() {
        return this._system;
    }
    set system(value) {
        this._system = value;
    }
    get props() {
        return this._props;
    }
    set props(value) {
        this._props = value;
    }
}
exports.default = ApiEntity;
//# sourceMappingURL=ApiEntity.js.map