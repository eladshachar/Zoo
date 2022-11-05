"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const animal_js_1 = __importDefault(require("./animal.js"));
class Bird extends animal_js_1.default {
    constructor(name, species, food, quantityGrams, wingSpan) {
        super(name, species, food, quantityGrams);
        this.wingSpan = wingSpan;
    }
}
exports.default = Bird;
