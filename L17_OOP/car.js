class Car {
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;

    constructor(carDetails) {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
    }

    displayInfo() {
        const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';

        console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk: ${trunkStatus}`);
    }

    go() {
        if (!this.isTrunkOpen) {
            this.speed += 5;
        }
        
        if (this.speed > 200) {
            this.speed = 200;
        }
    }

    brake() {
        this.speed -= 5;
        
        if (this.speed < 0) {
            this.speed = 0;
        }
    }

    openTrunk() {
        if (this.speed === 0) {
            this.isTrunkOpen = true;
        }
    }

    closeTrunk() {
        this.isTrunkOpen = false;
    }
}

const car1 = new Car({
    brand: 'Toyota',
    model: 'Corrolla'
});
const car2 = new Car({
    brand: 'Tesla',
    model: 'Model 3'
});

console.log(car1);
console.log(car2);

car1.go();
car2.go();

car1.displayInfo();
car2.displayInfo();

car1.brake();
car2.brake();

car1.displayInfo();
car2.displayInfo();

car1.openTrunk();
console.log(car1.isTrunkOpen);

car2.closeTrunk();
console.log(car2.isTrunkOpen);

car1.displayInfo();
car2.displayInfo();

car1.go();
car1.displayInfo();

car1.closeTrunk();
car1.go();
car1.displayInfo();

class RaceCar extends Car {
    acceleration;

    constructor(carDetails) {
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go() {
        this.speed += this.acceleration;

        if (this.speed > 300) {
            this.speed = 300;
        }
    }

    brake() {
        this.speed -= this.acceleration;
        
        if (this.speed < 0) {
            this.speed = 0;
        }
    }

    openTrunk() {
        console.log('Race cars do not have a trunk.');
    }

    closeTrunk() {
        console.log('Race cars do not have a trunk.');
    }
}

const raceCar1 = new RaceCar({
    brand: 'Toyota',
    model: 'Corrolla',
    acceleration: 20
});
const raceCar2 = new RaceCar({
    brand: 'Tesla',
    model: 'Model 3',
    acceleration: 14
});

console.log(raceCar1);
console.log(raceCar2);

raceCar1.displayInfo();
raceCar1.go();
raceCar1.displayInfo();