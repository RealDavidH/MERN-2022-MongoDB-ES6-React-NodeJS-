class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`My name is ${this.name}`);
    }
    showStats(){
        console.log(`Ninja: ${this.name}, Speed: ${this.speed}, Strength; ${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.name} drank sake, and gained 10 health! ${this.health}`);
    }
}

class Sensai extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        console.log(`${this.name} says: Being sane or insane is relative.`);
    }
    drinkSake(){
        console.log(super.drinkSake());
        this.speakWisdom();
    }
}
const ninja1 = new Ninja("David");


const sensai1 = new Sensai('Grand Master David');

console.log(sensai1.sayName());
console.log(sensai1.drinkSake());
console.log(ninja1.sayName());