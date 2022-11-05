import Animal from "./animal.js"

export default class Mammal extends Animal {
    pregnancyDuration: number

    constructor(name: string, species: string, food: string, quantityGrams: number, pregnancyDuration: number){
        super(name, species, food, quantityGrams)
        this.pregnancyDuration = pregnancyDuration
    }
   
}

module.exports = Mammal