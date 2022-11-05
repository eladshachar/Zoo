import Animal from "./animal.js"

export default class Fish extends Animal {
    lowestDepth: number

    constructor(name: string, species: string, food: string, quantityGrams: number, lowestDepth: number){
        super(name, species, food, quantityGrams)
        this.lowestDepth = lowestDepth
    }
}
