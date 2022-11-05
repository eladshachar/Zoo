"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name, species, food, quantityGrams) {
        this.name = name;
        this.species = species;
        this.food = food;
        this.quantityGrams = quantityGrams;
    }
    feedingNeeds() {
        return `${this.name} requires ${this.quantityGrams} grams of ${this.food} a day`;
    }
}
exports.default = Animal;
