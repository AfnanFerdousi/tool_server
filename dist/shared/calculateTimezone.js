"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalTime = void 0;
const city_timezones_1 = __importDefault(require("city-timezones"));
function getLocalTime(city) {
    try {
        return city_timezones_1.default.lookupViaCity(city);
    }
    catch (error) {
        return null;
    }
}
exports.getLocalTime = getLocalTime;
