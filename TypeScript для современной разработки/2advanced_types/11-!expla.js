"use strict";
// let word: string | null = null;
// const num = 10
exports.__esModule = true;
exports.printName = void 0;
// if (num > 5) {
//   word = 'abc'
// }
// console.log(word!.toLowerCase())
// export function printName(name?: string) {
//   const fullName: string = name!;
// }
// interface Person {
//   name: string
//   age: number
//   sex: 'female' | 'male'
// }
// function printName2(person?: Person) {
//   console.log(person!.name)
// }
// const people: Person[] = [
//   {
//     name: 'Gran',
//     age: 70,
//     sex: 'female'
//   },
//   {
//     name: 'Papa',
//     age: 72,
//     sex: 'male'
//   },
//   {
//     name: 'Mom',
//     age: 35,
//     sex: 'female'
//   },
//   {
//     name: 'Dad',
//     age: 38,
//     sex: 'male'
//   }
// ]
// const femalePeople = people.find(person => person.sex === 'female')!
var word = null;
var num = 10;
if (num > 5) {
    word = 'abc';
}
console.log(word.toLowerCase());
function printName(name) {
    var fullName = name;
}
exports.printName = printName;
var people = [
    {
        name: 'Gran',
        age: 70,
        sex: 'female'
    },
    {
        name: 'Papa',
        age: 72,
        sex: 'male'
    },
    {
        name: 'Mom',
        age: 35,
        sex: 'female'
    },
    {
        name: 'Dad',
        age: 38,
        sex: 'male'
    }
];
var femalePeople = people.find(function (person) { return person.sex === 'female'; });
console.log(femalePeople);
