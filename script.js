// that's my age
let myAge = 35;

//first 2 years equal to 10.5 years in dog life
let earlyYears = 2;
earlyYears *= 10.5;

//we already accounted first 2 years!
let laterYears = myAge - 2;

//Each year following equates to 4 dog years 
laterYears *= 4;

//early and later years together!
let myAgeInDogYears = (earlyYears + laterYears);

//create your name as in lowercase!
let myName = 'Onur'.toLowerCase();

//using interpolation to show name, age in dog years! 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
