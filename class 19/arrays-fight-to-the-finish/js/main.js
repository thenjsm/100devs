//Create an array of movie titles. Loop through the array and each element to the h2.

movieTitles = ['Bottoms','Mean Girls','Picture This','The Hot Chick','DUFF']

for (let i = 0; i <= movieTitles.length; i++) {
    document.querySelector('h2').innerText += ' ' + movieTitles[i];
}

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.

someNumbers = [20,6,9,23]
console.log(someNumbers)
for (let i = 0; i < someNumbers.length; i++) {
    const addThree = someNumbers[i] + 3;
    console.log(addThree)
}

//Find the average of all the numbers from question three

let someNumbers = [3, 5, 7, 9, 11];
let sumOfNumbers = 0;
let averageOfNums = 0;

for (let i = 0; i < someNumbers.length; i++) {
    sumOfNumbers += someNumbers[i];
}

averageOfNums = sumOfNumbers / someNumbers.length;

console.log('Sum:', sumOfNumbers);
console.log('Average:', averageOfNums);
