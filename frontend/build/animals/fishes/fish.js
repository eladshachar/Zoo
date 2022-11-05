"use strict";
class Fish extends Animal {
    constructor(name, species, food, quantityGrams, lowestDepth) {
        super(name, species, food, quantityGrams);
        this.lowestDepth = lowestDepth;
    }
}
