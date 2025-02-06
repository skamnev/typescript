const colors = ["red", "orange", "yellow"];

colors.map(color => {
    return color.toUpperCase();
})

function printTwice (msg: string)  {
    console.log(msg);
    console.log(msg);
}

function makeError (msg: string): never {
    throw new Error (msg);
}

function gameLoop(): never {
    while (true) {
        console.log("Game loop running!");
    }
}