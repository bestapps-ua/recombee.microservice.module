"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiListPager {
    constructor(props) {
        this._count = props.count;
        this._page = props.page;
        this._pages = props.pages;
        this._limit = props.limit;
    }
    get limit() {
        return this._limit;
    }
    set limit(value) {
        this._limit = value;
    }
    get pages() {
        return this._pages;
    }
    set pages(value) {
        this._pages = value;
    }
    get page() {
        return this._page;
    }
    set page(value) {
        this._page = value;
    }
    get count() {
        return this._count;
    }
    set count(value) {
        this._count = value;
    }
}
exports.default = ApiListPager;
//# sourceMappingURL=ApiListPager.js.map