//const nums: number[] = [];
const nums: Array<number> = [];
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