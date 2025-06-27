const movies = [
    { title: "Inception", year: 2010, rating: 8.8 },
    { title: "The Matrix", year: 1999, rating: 8.7 },
    { title: "Parasite", year: 2019, rating: 8.6 },
    { title: "Interstellar", year: 2014, rating: 8.6 },
    { title: "The Godfather", year: 1972, rating: 9.2 },
    { title: "Avengers: Endgame", year: 2019, rating: 8.4 },
];


const movieName = movies.map(movies => movies.title);
console.log(movieName);
// const filterAndAverage = movies.filter(movies => movies.year >= 2000);

const filterAndAverage = (movies, minYear, minRating) => {
    const filtered = movies.filter(movies => movies.year >= minYear && movies.rating >= minRating);
    console.log(`filtered: ${filtered.length}`);
    if (filtered.length === 0) {
        return 'secilen kriterlere uygun film bulunamadı';
    }

    const averageRating = filtered.reduce((sum, movie) => sum + movie.rating, 0) / filtered.length;

    return `secilen kriterlere uygun filmlerin ortalama puanı: ${filtered.length}`;

}

console.log(filterAndAverage(movies, 2000, 5.5));




const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 0;
for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];

    console.log(result);
}
console.log(result);

const average = result / numbers.length;
console.log(`Ortalama: ${average}`);

const sum = numbers.reduce((acumalator, currentValue) => {
    return acumalator + currentValue;
}, 1);

console.log(`Reduce ile toplam: ${sum}`);



const sumTwoNumbers = (num1, num2) => {
    return num1 + num2;
}

function sumThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(sumTwoNumbers(5, 10));
console.log(sumThreeNumbers(5, 10, 15));