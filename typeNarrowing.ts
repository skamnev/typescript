function someDemo(x: string | number, y: string | boolean) {
    if ( x === y ) {
        x.toUpperCase();
    }
}
someDemo(3, "3");

interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRuntime(media: Movie | TVShow) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }

    return media.duration;
}
getRuntime({title: "Amadeus", duration: 140});
getRuntime({title: "Spngebob", numEpisodes: 80, episodeDuration: 30});

function printFullDate (date: string | Date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log( new Date(date).toUTCString());
    }
}

class User {
    constructor(public username: string) {}
}

class Company {
    constructor (public name: string ) {}
}

function printName(entity: User | Company) {
    if (entity instanceof User) {

    } else {

    }
}

interface Cat {
    name: string,
    numLives: number
}

interface Dog {
    name: string,
    breed: string
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined;
}

function makeNoice( animal: Cat | Dog): string {
    if (isCat(animal)) {
        return "Meow";
    } else {
        return "Bark";
    }
}

interface Rooster {
    name: string,
    weight: number,
    age: number,
    kind: "rooster",
}

interface Cow {
    name: string,
    weight: number,
    age: number,
    kind: "cow",
}

interface Pig {
    name: string,
    weight: number,
    age: number,
    kind: "pig",
}

interface Sheep {
    name: string,
    weight: number,
    age: number,
    kind: "sheep",
}



type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
    switch(animal.kind) {
        case "pig":
            return "Oink!";
        case "cow":
            return "Moooo!";
        case "rooster":
            return "Cockadoodledoo!";
        case "sheep":
            return "Baaa!";
        default:
            // We should never make it here, if we handled all cases correctly
            const _exhaustiveCheck: never = animal;
            return _exhaustiveCheck;
    }
}

const stevie: Rooster = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster",
}

console.log(getFarmAnimalSound(stevie));