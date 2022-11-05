import Animal from "./animal.js"

export default class Bird extends Animal {
    wingSpan: number

    constructor(name: string, species: string, food: string, quantityGrams: number, wingSpan: number){
        super(name, species, food, quantityGrams)
        this.wingSpan = wingSpan
    }
}
