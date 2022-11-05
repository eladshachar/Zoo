"use strict";
class Mammal extends Animal {
    constructor(name, species, food, quantityGrams, pregnancyDuration) {
        super(name, species, food, quantityGrams);
        this.pregnancyDuration = pregnancyDuration;
    }
}
