class Hamster{
    constructor(ownerPram, nameParam = "", priceParam = 15){
        this.owner = ownerPram,
        this.name = nameParam,
        this.price = priceParam
    }

    // Hampster class methods

wheelRun(){
    console.log("squeak squeak");
} 

eatFood(){
    console.log("nibble nibble");
}  
getPrice(){
    return this.price;
}  

}

// testing the Hamster class:
// const anInstanceOfHamster = new Hamster();
// anInstanceOfHamster.wheelRun();
// anInstanceOfHamster.eatFood();
// console.log(anInstanceOfHamster.getPrice());

// Superclass - parent class named Person
class Person {
    constructor(nameParam, ageParam = 0, heightParam = 0, weightParam = 0, moodParam = 0, hampsterParam = [], bankAcountParam = 0) {
        this.name = nameParam,
        this.age = ageParam
        this.height = heightParam
        this.weight = weightParam
        this.mood = moodParam
        this.hamster = hampsterParam
        this.bankAcount = bankAcountParam
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getWeight() {
        return this.weight;
    }

    greet()  {
        console.log('Hello ' + this.name);
    }
    eat()  {
        this.weight++;
        this.mood++;
    }
    exercise()  {
        this.mood--;
    }
    ageUp()   {
        this.age++;  
        this.height++; 
        this.weight++; 
        this.mood--; 
        this.bank_account += 10;
    }
    buyHamster(hamster)  {
        this.hamster(hamster);
        this.mood++; 
        this.bank_account -= hamster.getPrice();

    }
}