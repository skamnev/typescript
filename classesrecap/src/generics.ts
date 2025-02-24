//const nums: number[] = [];
//const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
const btn = document.querySelector<HTMLButtonElement>(".btn")!;

function numberIdentity(item: number): number {
    return item;
}
function stringIdentity(item: string): string {
    return item;
}
function booleanIdentity(item: boolean): boolean {
    return item;
}

function identityAny(item: any): any {
    return item;
}

interface Cat {
    name: string,
    breed: string;
}

function identity<Type>(item: Type): Type {
    return item;
}

identity<number>(7);
identity<string>("hello");
identity<Cat>({name: "Cat", breed: "breed"});

function getRandomElemnt<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);

    return list[randIdx];
}

getRandomElemnt<string>(["a", "b", "c"]);
getRandomElemnt<number>([5, 6, 21, 34, 436, 342]);

function merge<T extends object,U extends object>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    }
}

const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"]});

interface Lengthy {
    length: number;
}

//Assign type for generic function
function printDoubleLength<T extends Lengthy >(thing: T): number {
    return thing.length *2;
}

//Assign type for generic function 2
function printDoubleLength2(thing: Lengthy): number {
    return thing.length *2;
}

//default type for generic function
function makeEmtpyArray<T = number>(): T[] {
    return []
}

const nums = makeEmtpyArray();
const bools = makeEmtpyArray<boolean>();

interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class Playlist<T> {
    public queue: T[] = [];
    add(el: T) {
        this.queue.push(el)
    }    
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();