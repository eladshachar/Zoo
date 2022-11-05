"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mammal_js_1 = __importDefault(require("./animals/mammal.js"));
const seaMammal_js_1 = __importDefault(require("./animals/seaMammal.js"));
const bird_js_1 = __importDefault(require("./animals/bird.js"));
const fish_js_1 = __importDefault(require("./animals/fish.js"));
const zoo_js_1 = __importDefault(require("./zoo.js"));
const simba = new mammal_js_1.default("Simba", "lion", "meat", 6000, 9);
const nala = new mammal_js_1.default("Nala", "lion", "meat", 6000, 9);
const willy = new seaMammal_js_1.default("Willy", "whale", "plankton", 2000000, 20, 800);
const akka = new bird_js_1.default("Akka", "goose", "seeds", 1000, 120);
const hedwig = new bird_js_1.default("Hedwig", "snowy owl", "worms", 100, 60);
const nemo = new fish_js_1.default("Nemo", "clownfish", "algae", 3, 60);
const marlin = new fish_js_1.default("Marlin", "clownfish", "algae", 3, 60);
let myZoo = new zoo_js_1.default([simba, nala, willy, akka, hedwig, nemo, marlin], new Map([["meat", 20000], ["algae", 2]]));
myZoo.addFood("algae", 1);
