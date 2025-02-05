let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
movieTitle = 100;
movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives +=1;

let gameOver: boolean = false;
gameOver = true;
gameOver = "true";

// Type Infrence

let tvShow = "Olive Kitteridge";
tvShow = "Test as new String";
tvShow = false;

let isFunny = false;
isFunny = true;
isFunny = "asd";

// the any type

let thing: any = "hello";
thing = 1;
thing = false;
thing();

const movies = ['Arrivals', 'The Thing', 'Aliens','Amadeus'];

let foundMovie: string;

for (let movie of movies) {
    if (movie === 'Amadeus') {
        foundMovie = 'Amadeus';
    }
}