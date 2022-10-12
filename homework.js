class Hamster{
    constructor(ownerPram, nameParam, priceParam){
        this.name = "",
        this.owner = ownerPram,
        this.price = 15
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

const anInstanceOfHamster = new Hamster();
anInstanceOfHamster.wheelRun();
anInstanceOfHamster.eatFood();
console.log(anInstanceOfHamster.getPrice());