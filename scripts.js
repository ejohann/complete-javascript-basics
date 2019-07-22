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

/*
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

var lastName = prompt('What is his last name?');

console.log(firstName + ' ' +lastName);
*/


/*************************************
 * Basic Operators
*/

/*
var year, yearJohn, yearMark;
now = 2019;
ageJohn = 38;
ageMark = 22;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearMark);

console.log(now + 3 );
console.log(now * 2 );
console.log(now / 10 );

// logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is Older');

*/

/*************************************
 * Operator Precedence
*/

var now = 2019;
var yearJohn = 1980;
var fullAge = 18;

//multiple operators
var isFullAge = now - yearJohn >= fullAge; // full age
console.log(isFullAge);


//grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//multiple assignments

var x, y;
y = x = (3 + 5) * 4 - 6; // 8 * 4 - 6 //32 - 6// 26 
console.log(x);
console.log(y);