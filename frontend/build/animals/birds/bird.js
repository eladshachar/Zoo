"use strict";
class Bird extends Animal {
    constructor(name, species, food, quantityGrams, wingSpan) {
        super(name, species, food, quantityGrams);
        this.wingSpan = wingSpan;
    }
}
module.exports = Bird;
