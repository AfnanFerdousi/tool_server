"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pick = (obj, keys) => {
    const finalObj = {};
    for (const key of keys) {
        if (obj && Object.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            if (value !== null && value !== undefined && value !== "") {
                finalObj[key] = value;
            }
        }
    }
    return finalObj;
};
exports.default = pick;
