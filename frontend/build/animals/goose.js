"use strict";
let Bird = require('./bird');
class Goose extends Bird {
    constructor(name, species = "goose", food = "seeds", quantityGrams = 1000, wingSpan = 120) {
        super(name, species, food, quantityGrams, wingSpan);
    }
}
