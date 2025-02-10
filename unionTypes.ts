let age: number | string = 21;
age = "23";

type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
}

let coordinates: Point | Loc = {x: 1, y:34};
coordinates = {lat: 321.123, long: 234.432};

const coords: (Point | Loc ) [] = [];
coords.push({ lat: 321.213, long: 23.334 });
coords.push({ x: 213, y: 43 });