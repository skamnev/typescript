class Player {
  static description = "Some classs Description";
  #score = 0;
  #numLives = 10;

  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  static randomPlayer() {
    return new Player("Andy", "Samberg");
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  get score() {
    return this.#score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score can not be negative");
    }
    this.#score = newScore;
  }

  taunt() {
    console.log("booyah!");
  }

  loseLife() {
    this.#numLives -= 1;
  }
}

class AdminPlayer extends Player {
  isAdmin = true;

  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
}

const player1 = new Player("blue", "steele");
player1.taunt();
console.log(player1);
console.log(player1.fullName);

const adminPlayer = new AdminPlayer("admin", "mcAdmin", [
  "delete",
  "restore world",
]);
player1.taunt();
