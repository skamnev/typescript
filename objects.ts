const dog = {
    name: "Elton",
    breed: "Australian Shepherd",
    age: 0.5
}

function printName(person: {first: string; last: string}) {
    console.log(`${person.first} ${person.last}`);
}

printName({first: "Thomas", last: "Jenkins"});

let coordinate: {x: number, y: number} = {x: 34, y: 2};

function randomCoordinate (): {x: number, y:number} {
    return {x: Math.random(), y: Math.random()}
}

type Point = {
    x: number;
    y: number;
    z?: number;
}

function doublePoint (point: Point): Point {
    return {x: point.x * 2, y: point.y *2};
}

printName({first: "Mick", last: "Jagger", age: 473});
const singer = {first: "Mick", last: "Jagger", age: 473, isAlive: true};
printName(singer);

type Song = {
    title: string,
    artist: string,
    numStreams: number,
    credits: {
        producer: string,
        writer: string
    }
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
    title: "Title",
    artist: "Some Artist",
    numStreams: 122323,
    credits: {
        producer: "Producer Name",
        writer: "Writer Name"
    }
}

type User = {
    readonly id: number;
    username: string;
}

const user: User = {
    id: 12837,
    username: "catgurl"
}

console.log(user.id);
user.id = 2343;

type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow",
}

type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}

type CatDog = Cat & Dog & { age: number; }

const christy: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 9
}