import Animal from "./animals/animal"

export default class Zoo {
    animals: Animal[]
    foodInventory: Map<string, number> = new Map([])
    dailyFoodRequirements: Map<string, number> = new Map([])

    constructor(animals: Animal[], foodInventory: Map<string, number> = new Map([]) ){
        this.animals = animals
        this.foodInventory = foodInventory
        this.fillDailyFoodRequirements()
        this.alertExistingShortages()
    }

    addFood(food: string, quantity: number){
        if(this.foodInventory.has(food)){
            this.foodInventory.set(food, this.foodInventory.get(food) + quantity)
        }
        else{
            this.foodInventory.set(food, quantity)
        }
    }

    fillDailyFoodRequirements(){

        for(let animal of this.animals){
            this.dailyFoodRequirements.set(animal.food, this.dailyFoodRequirements.has(animal.food) ? this.dailyFoodRequirements.get(animal.food) + animal.quantityGrams : animal.quantityGrams)
        }
    }

    alertExistingShortages(){
        for(let entry of this.dailyFoodRequirements.entries()){
            let foodType: string = entry[0]
            let foodQuantityRequired: number = entry[1]
            let foodQuantityAvailable: number = 0

            if(this.foodInventory.has(foodType)){
                foodQuantityAvailable = this.foodInventory.get(foodType)
            }

            if(foodQuantityRequired > foodQuantityAvailable){
                console.log(`There is currently ${foodQuantityAvailable} grams of ${foodType} in inventory. The zoo requires ${foodQuantityRequired} every day`)
            }

        }
    }
}

