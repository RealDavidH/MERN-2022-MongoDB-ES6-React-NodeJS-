const Card = require("./model_card")
const Unit = require("./model_unit")

module.exports = class Effect extends Card{
    constructor(name, cost, desc, magnitude, stat_tar){
        super(name, cost)
        this.desc = desc
        this.magnitude = magnitude
        this.stat_tar = stat_tar
    }
    play( target ) {
        if( target instanceof Unit ) {
            let stat = this.stat_tar
            if(stat == "resilience"){
                target.res += this.magnitude
            }
            if(stat == "power"){
                target.power += this.magnitude
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}