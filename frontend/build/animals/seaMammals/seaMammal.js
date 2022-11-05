"use strict";
class SeaMammal extends Animal {
    constructor(name, species, food, quantityGrams, pregnancyDuration, lowestDepth) {
        super(name, species, food, quantityGrams);
        this.pregnancyDuration = pregnancyDuration;
        this.lowestDepth = lowestDepth;
    }
}
