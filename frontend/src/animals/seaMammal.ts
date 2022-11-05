import Animal from "./animal.js"

export default class SeaMammal extends Animal {
    pregnancyDuration: number
    lowestDepth: number

    constructor(name: string, species: string, food: string, quantityGrams: number, pregnancyDuration: number, lowestDepth: number){
        super(name, species, food, quantityGrams)
        this.pregnancyDuration = pregnancyDuration
        this.lowestDepth = lowestDepth
    }   
}
