"use strict";
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("Hello!");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
const betty = new FullTimeEmployee("Betty", "Welth", 95000);
console.log(betty.getPay());
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());
class Player {
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
        this.numLives = 10;
    }
    static randomPlayer() {
        return new Player("Andy", "Samberg", 0);
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score can not be negative");
        }
        this._score = newScore;
    }
    taunt() {
        console.log("booyah!");
    }
    loseLife() {
        this.numLives -= 1;
    }
}
Player.description = "Some classs Description";
class AdminPlayer extends Player {
    constructor(first, last, powers) {
        super(first, last, 0);
        this.first = first;
        this.last = last;
        this.powers = powers;
        this.isAdmin = true;
    }
}
const player1 = new Player("blue", "steele", 0);
player1.taunt();
console.log(player1);
console.log(player1.fullName);
const adminPlayer = new AdminPlayer("admin", "mcAdmin", [
    "delete",
    "restore world",
]);
player1.taunt();
