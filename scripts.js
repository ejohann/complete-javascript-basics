/*************************************
 * Variables and Data Types
*/

/*
var firstName = 'Johanne';
console.log(firstName);

var lastName = 'Lewis';
var age = 38;
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Developer';
console.log(job);

//variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
*/

/*************************************
 * Variable mutation and type coercion
*/

var firstName = 'Johanne';
var age = 38;

//type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Developer';
isMarried = false;

console.log(firstName + ' is a '  + age + ' year old ' + job +'. Is he married? ' + isMarried);

//variable mutation
age = 'Thirty Eight';
job = 'Disc Jockey';

alert(firstName + ' is a '  + age + ' year old ' + job +'. Is he married? ' + isMarried);
