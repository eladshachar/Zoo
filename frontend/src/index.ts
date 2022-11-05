import Mammal from "./animals/mammal.js"
import SeaMammal from "./animals/seaMammal.js"
import Bird from "./animals/bird.js"
import Fish from "./animals/fish.js"
import Zoo from "./zoo.js"

const simba = new Mammal("Simba", "lion", "meat", 6000, 9)
const nala = new Mammal("Nala", "lion", "meat", 6000, 9)
const willy = new SeaMammal("Willy", "whale", "plankton", 2000000, 20, 800)
const akka = new Bird("Akka", "goose", "seeds", 1000, 120)
const hedwig = new Bird("Hedwig", "snowy owl", "worms", 100, 60)
const nemo = new Fish("Nemo", "clownfish", "algae", 3, 60)
const marlin = new Fish("Marlin", "clownfish", "algae", 3, 60)

let myZoo = new Zoo([simba, nala, willy, akka, hedwig, nemo, marlin], new Map([["meat", 20000],["algae", 2]]))

myZoo.addFood("algae", 1)