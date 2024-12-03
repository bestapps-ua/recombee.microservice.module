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
Object.defineProperty(exports, "__esModule", { value: true });
let uuid4 = require('uuid/v4');
class APIModel {
    constructor() {
    }
    call(action, params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let t = Date.now();
            try {
                params.requestId = uuid4();
                let res = yield this.broker.call(action, params);
                if (!res['ok']) {
                    throw res;
                }
                if (res && res.data) {
                    res.data._system = {
                        ttl: Math.round(Date.now() - t) / 1000,
                    };
                }
                return res;
            }
            catch (err) {
                console.log('err call', { err, action, params });
                throw err;
            }
        });
    }
    get broker() {
        return this._broker;
    }
    set broker(value) {
        this._broker = value;
    }
}
exports.default = new APIModel();
//# sourceMappingURL=APIModel.js.map