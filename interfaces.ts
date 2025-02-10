interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    sayHi:() => string;
}

const thomas: Person = {
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    id: 2132,
    sayHi: () => {
        return "Hello!";
    }
}

interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Some Shoes",
    price: 100,
    applyDiscount(amount: number) {
        return this.price * (1 - amount);
    }
}

console.log(shoes.applyDiscount(0.4));

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 1,
    breed: "Australian Shepherd",
    bark() {
        return "WOOF WOOF!";
    },
};

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "Bark!"
    },
    job: "guide dog",
}

interface Human {
    name: string
}

interface Employee {
    readonly id: number,
    email: string,
}

interface Engineer extends Human, Employee {
    level: string,
    languages: string[]
}

const pierre: Engineer = {
    name: "Pierre",
    id: 23434,
    email: "pierre@test.com",
    level: "senior",
    languages: ["JS", "Python"]
}