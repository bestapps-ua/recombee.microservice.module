"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TYPE_INT = 'int';
const TYPE_DOUBLE = 'double';
const TYPE_STRING = 'string';
const TYPE_BOOLEAN = 'boolean';
const TYPE_TIMESTAMP = 'timestamp';
const TYPE_SET = 'set';
const TYPE_IMAGE = 'image';
const TYPE_IMAGE_LIST = 'imageList';
class PropertyModel {
    getTypes() {
        return {
            TYPE_INT,
            TYPE_DOUBLE,
            TYPE_STRING,
            TYPE_BOOLEAN,
            TYPE_TIMESTAMP,
            TYPE_SET,
            TYPE_IMAGE,
            TYPE_IMAGE_LIST,
        };
    }
}
exports.default = new PropertyModel();
//# sourceMappingURL=PropertyModel.js.map