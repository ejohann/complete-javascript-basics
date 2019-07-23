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

/*
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
console.log(x, y);

// more operators
x *= 2;
console.log(x);

x += 10;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);
*/


/*************************************
 * CODING CHALLENGE 1
*/

/*
  Calculate Mark and John BMI (body mass index)

  BMI = mass / height * height (mass in kg and height in meter)

*/

/*
var markMass, johnMass, markHeight, johnHeight, markBMI, johnBMI;

markMass = 127;
markHeight = 1.67;

markBMI = markMass / (markHeight * markHeight);

console.log(markBMI);

johnMass = 84.4;
johnHeight = 1.74;

johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);

var isBMIHigher =  markBMI > johnBMI;
console.log('Is Mark\'s BMI higher than John\'s? ' + isBMIHigher);


*/





/*************************************
 * If / else statements
*/
/*
var firstName = 'Johanne';
var civilStatus = 'single';


if(civilStatus  === 'married'){
  console.log(firstName + ' is married');       
 }
else{
    console.log(firstName + ' will hopefully marry soon :) ');
}

var isMarried = true;
if(isMarried){
  console.log(firstName + ' is married');       
 }
else{
    console.log(firstName + ' will hopefully marry soon :) ');
}



var markMass, johnMass, markHeight, johnHeight, markBMI, johnBMI;

markMass = 127;
markHeight = 1.67;

markBMI = markMass / (markHeight * markHeight);

johnMass = 84.4;
johnHeight = 1.74;

johnBMI = johnMass / (johnHeight * johnHeight);

if(markBMI > johnBMI)
 {
     console.log('Mark\'s BMI is higher than John\'s');
 }
else
 {
     console.log('John\'s BMI is higher than Mark\'s');
 }
*/



/*************************************
 * Boolean Logic
*/

/*
var firstName = 'Johanne';
var age = 20;

if(age < 13){
    console.log(firstName + ' is a boy');
}
else if(age > 12 && age < 20){
  console.log(firstName + ' is a teenager');        
}
else if(age >= 20 && age < 30){
   console.log(firstName + ' is a young man');     
}
else{
     console.log(firstName + ' is a man');
}

*/




/*************************************
 * The Tenary Operator and Switch Statements
*/

/*

//tenary operator
var firstName = 'Johanne';
var age = 17;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//switch statement
var job = 'developer';

switch(job) {
    case 'developer':
    case 'programmer':
       console.log(firstName + ' develops complex websites');
        break;       
    case 'driver':
        console.log(firstName + ' is learning to drive');
        break;
    case 'disc jockey':
        console.log(firstName + ' knows how to rock a party');
        break;
    default:
        console.log(firstName + ' does something else');
}


switch(true){
    case age < 13:
       console.log(firstName + ' is a boy');
        break;
    case age > 12 && age < 20:
       console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man'); 
        break;
    default:
        console.log(firstName + ' is a man');        
}

*/


/*************************************
 * Truthy and falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', Nan

// truthy values: NOT falsy values

/*
var height = 23;

height || height === 0 ? console.log('variable is defined') : console.log('variable has NOT been defined');


//Equality coercion

height === '23' ? console.log('The == operator does type coercion!') : console.log('');

*/



/*************************************
 * Coding Challenge 2
*/

/*
    Last three basketball games scores: John's team - 89, 120, 103 and Mike's team - 116, 94, 123
    1. average score for each team
    2. print the winner to the console based on the highest average - also print the average
    3. change the scores to show different winners - take into account there might be a draw
    4. Mary's team scored 97, 134 and 105 points - log the winner to the console - change the scores to generate different winners
*/

var teamJohnGame1, teamJohnGame2, teamJohnGame3, teamMikeGame1, teamMikeGame2, teamMikeGame3, teamJohnAvg, teamMikeAvg;

teamJohnGame1 = 89;
teamJohnGame2 = 91;
teamJohnGame3 = 101;
teamMikeGame1 = 88;
teamMikeGame2 = 94;
teamMikeGame3 = 99;
teamJohnAvg = (teamJohnGame1 + teamJohnGame2 + teamJohnGame3) / 3;
teamMikeAvg = (teamMikeGame1 + teamMikeGame2 + teamMikeGame3) / 3;

console.log('Team John average score ' + teamJohnAvg);
console.log('Team Mike average score ' + teamMikeAvg);

switch(true){
    case teamJohnAvg > teamMikeAvg:
        console.log('John\'s team won with average points of ' + teamJohnAvg);
        break;
    case 
        teamMikeAvg > teamJohnAvg:
        console.log('Mike\'s team won with average points of ' + teamMikeAvg);
        break;
    default:
        console.log('There was a draw');
}


var teamMaryGame1, teamMaryGame2, teamMaryGame3, teamMaryAvg;

teamMaryGame1 = 99;
teamMaryGame2 = 93;
teamMaryGame3 = 89;
teamMaryAvg = (teamMaryGame1 + teamMaryGame2 + teamMaryGame3) /3;

console.log('Team Mary average score ' + teamMaryAvg);

switch(true){
    case teamJohnAvg > teamMikeAvg && teamJohnAvg > teamMaryAvg :
        console.log('John\'s team won with average points of ' + teamJohnAvg);
        break;
    case 
        teamMikeAvg > teamJohnAvg && teamMikeAvg > teamMaryAvg :
        console.log('Mike\'s team won with average points of ' + teamMikeAvg);
        break;
    case 
        teamMaryAvg > teamJohnAvg && teamMaryAvg > teamMikeAvg :
        console.log('Mary\'s team won with average points of ' + teamMaryAvg);
        break;
    case 
        teamMaryAvg === teamJohnAvg && teamMaryAvg > teamMikeAvg :
        console.log('Mary\'s and John\'s team won with a tie.  Average points ' + teamMaryAvg, teamJohnAvg);
        break;
     case 
        teamMaryAvg === teamMikeAvg && teamMaryAvg > teamJohnAvg :
        console.log('Mary\'s and Mike\'s team won with a tie. Average points of ' + teamMaryAvg, teamMikeAvg);
        break;
     case 
        teamMikeAvg === teamJohnAvg && teamMikeAvg > teamMaryAvg :
        console.log('Mike\'s and John\'s team won with a tie. Average points of ' + teamMikeAvg, teamJohnAvg);
        break;
     case 
        teamMaryAvg === teamJohnAvg && teamMaryAvg < teamMikeAvg :
        console.log('Mary\'s and John\'s team had a tie.  Mike\'s team won with average points ' + teamMikeAvg);
        break;
     case 
        teamMaryAvg === teamMikeAvg && teamMaryAvg < teamJohnAvg :
        console.log('Mary\'s and Mike\'s team had a tie. John\'s team won with average points of ' + teamJohnAvg);
        break;
     case 
        teamMikeAvg === teamJohnAvg && teamMikeAvg < teamMaryAvg :
        console.log('Mike\'s and John\'s team had a tie. Mary\'s team won with average points of ' + teamMaryAvg);
        break;
    default:
        console.log('There was a draw');
}


















































