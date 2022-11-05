export default class Animal {
    name: string
    species: string
    food: string
    quantityGrams: number
    
    constructor(name: string, species: string, food: string, quantityGrams: number){
        this.name = name
        this.species = species
        this.food = food
        this.quantityGrams = quantityGrams
    }

    feedingNeeds() {
        return `${this.name} requires ${this.quantityGrams} grams of ${this.food} a day`
    }

}
