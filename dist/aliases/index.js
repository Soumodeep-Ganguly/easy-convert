"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const area_1 = __importDefault(require("./area"));
const computer_storage_1 = __importDefault(require("./computer-storage"));
const length_1 = __importDefault(require("./length"));
const weight_1 = __importDefault(require("./weight"));
const alias = Object.assign(Object.assign(Object.assign(Object.assign({}, length_1.default), weight_1.default), area_1.default), computer_storage_1.default);
exports.default = alias;
