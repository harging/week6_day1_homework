var sports = ["football", "basketball", "baseball", "hockey"];
// var numberOfElement = sports.length;
// // console.log(numberOfElement)

// var firstSport = sport[0];

// sports.push("snooker");
// sports.pop()
// // console.log(sport)

// shift(); // removes the first element of the array
// unshift(); // adds an element to the beginning of the array

// var removedSport = sports.splice(2, 1);
// console.log(removedSport);
// console.log(sports);

// for (var sport of sports) {
//     var upperCaseSport = sport.toUpperCase();
//     console.log(upperCaseSport);
// }

// for (var i = 0; i < sports.length; i++) {
//     var currrentSport = sports[i];
//     var upperCase = currrentSport.toUpperCase();
//     console.log(upperCase);
// }

var movie = {
    title: "It's a wonderful life",
    year: 1946,
    language: "Spanish",
};

console.log("movie:", movie);

console.log(movie["title"]);
console.log(movie.title);

movie.cast = ["James Stewart", "Donna Reid"];

movie.language = ["English"]

movie["subtitle-language"] = "Spanish";

// delete movie.year;

movie.ratings = {
    critics: 94,
    audience: 80,
    NYT: 100,
    LAT: 77,
}

for (var key in movie) {
    var value = movie[key];
    console.log(`The ${key} is ${value}`);
}

var keys = Object.keys(movie)
console.log(keys)

console.log("movie:", movie);