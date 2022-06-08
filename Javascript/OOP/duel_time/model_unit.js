const Card = require("./model_card");

module.exports = class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power;
        } else {
            throw new Error("Target must be a unit!");
        }
    }
};
