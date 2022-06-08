const Effect = require("./model_effect")
const Unit = require("./model_unit")

const red = new Unit("Red Belt Ninja", 4, 3, 4)
const black = new Unit("Black Belt Ninja", 4, 5, 4)


const hard = new Effect("Hard Algorithm", 2,"increase target's resilience by 3", 3, "resilience")
const unhand = new Effect("Unhandled Promise", 1, "reduce target's resilience by 2", -2, "resilience" )
const pair = new Effect("Pair Programming", 3, "increase target's power by 2", 2, "power")


hard.play(red)
unhand.play(red)
pair.play(red)

red.attack(black)

console.log(black)
console.log(red)