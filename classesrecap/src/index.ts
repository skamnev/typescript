interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) {}

    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}

abstract class Employee {
    constructor(public first: string, public last: string) {}

    abstract getPay(): number;
    greet() {
        console.log("Hello!");
    }
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last);
    }

    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(first: string, last: string, private hourlyRate: number, private hoursWorked: number) {
        super(first, last);
    }

    getPay(): number {
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
    static description = "Some classs Description";
    public numLives: number = 10;
  
    constructor(public first: string, public last: string, private _score: number) {}
  
    static randomPlayer() {
      return new Player("Andy", "Samberg", 0);
    }
  
    get fullName(): string {
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
  
  class AdminPlayer extends Player {
    isAdmin = true;
  
    constructor(public first: string, public last: string, private powers: string[]) {
      super(first, last, 0);
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
  