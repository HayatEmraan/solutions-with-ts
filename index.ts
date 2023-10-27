// problem solving/index.ts
function getRndNumber(min: number, max: number): number {
  return Math.ceil(Math.random() * (max - min + 1)) + min;
}

console.log(getRndNumber(5, 10));

// problem solving/index.ts
const students: string[] = ["John", "Zoo", "Tom", "Pete", "Mary"];

console.log(students.sort());

// problem solving/index.ts
const numbers: number[] = [1, 9, 11, 3, 2, 3, 4, 5];

console.log(numbers.sort((a, b) => a - b));

// problem solving/index.ts
function isLeapYear(year: number): string {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
}

console.log(isLeapYear(2022));

// problem solving/index.ts
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence: string): string {
  let count = 0;
  const letters: string[] = Array.from(sentence);
  letters.forEach((letter) => {
    if (vowels.includes(letter)) {
      count++;
    }
  });
  return `${sentence} has ${count} vowels`;
}

console.log(countVowels("I love Bangladesh"));

// problem solving/index.ts

const dupNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 7, 8, 9, 10];

const duplicates = dupNumbers.filter((value, index, Array) => Array.indexOf(value) !== index);

console.log(duplicates);