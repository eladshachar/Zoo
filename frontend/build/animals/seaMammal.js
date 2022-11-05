"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const animal_js_1 = __importDefault(require("./animal.js"));
class SeaMammal extends animal_js_1.default {
    constructor(name, species, food, quantityGrams, pregnancyDuration, lowestDepth) {
        super(name, species, food, quantityGrams);
        this.pregnancyDuration = pregnancyDuration;
        this.lowestDepth = lowestDepth;
    }
}
exports.default = SeaMammal;
