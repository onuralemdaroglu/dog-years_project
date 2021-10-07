//this my age / how old I am??
 let myAge = 35;

//creating another variable and save the value 2.
let earlyYears = 2;

//cause first 2 years dog's life count as 10.5 dog years each.
earlyYears *= 10.5;

//we already counted for the first 2 years.So subtract 2.
let laterYears = myAge - 2;

//following each year equals to 4 dog years.
laterYears *= 4;

//this shows my age as dog years.
let myAgeInDogYears = earlyYears + laterYears;

//variable value saved with my name in lowercase.
let myName = 'Onur'.toLowerCase();

//using interpolation to show together human & dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years
 which is ${myAgeInDogYears} years old in dog years.`);



