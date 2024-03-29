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


/*
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


// LECTURER SOLUTION

var scoreJohn = (110 + 120 + 103) /3;
var scoreMike = (116 + 97 + 123) /3;
var scoreMary = (97 + 134 + 105) /3;
console.log(scoreJohn, scoreMike, scoreMary);

if(scoreJohn > scoreMike && scoreJohn > scoreMary){
      console.log('John\'s team wins with ' + scoreJohn + ' points');
  }
else if(scoreMike > scoreJohn && scoreMike > scoreMary){
      console.log('Mike\s team wins with ' + scoreMike + ' points'); 
  }
else if(scoreMary > scoreJohn && scoreMary > scoreMike){
      console.log('Mary\s team wins with ' + scoreMary + ' points');   
  }
else {
    console.log('There is a draw');
}

*/

/*
if(scoreJohn > scoreMike){
    console.log('John\'s team wins with ' + scoreJohn + ' points');
 }
else if(scoreMike > scoreJohn){
    console.log('Mike\s team wins with ' + scoreMike + ' points');   
 }
else{
    console.log('There is a draw');   
 }

*/




/*************************************
 * Functions
*/

/*
function calculateAge(birthYear){
    return 2019 - birthYear;
}

var ageMike = calculateAge(1997);
var ageMary = calculateAge(1974);
var ageJohn = calculateAge(1980);
console.log(ageMike, ageMary, ageJohn);



function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0)
      {
        console.log(firstName + ' retires in ' + retirement + ' years ');
      }
    else
      {
        console.log(firstName + ' is already retired');  
      }
}

yearsUntilRetirement(1997, 'Mike');

yearsUntilRetirement(1980, 'Johanne');

yearsUntilRetirement(1945, 'Mary');
*/


/*************************************
 * Function Statements and Expressions
*/


/*
//function expression

var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'disc jockey':
            return firstName + ' rocks the party';
        case 'driver':
           return firstName + ' is learning to drive';
        case 'developer':
            return firstName + ' develops complex websites';
        default:
            return firstName + ' does something else';
    }
}


console.log(whatDoYouDo('disc jockey', 'Johanne'));
console.log(whatDoYouDo('developer', 'Johanne'));
console.log(whatDoYouDo('is retired', 'Jane'));

*/



/*************************************
 *  Arrays
*/

/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1980, 1997, 1948);

console.log(names);
console.log(names.length);

// mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';

console.log(names);


//different data types
var john = ['John', 'Smith', 1998, 'developer', false];

// add item to end of array
john.push('blue');

// add item to beginning of array
john.unshift('Mr');
console.log(john);

// remove item from end of array
john.pop();
console.log(john);

john.pop();
console.log(john);

//remove item from beginning of array
john.shift();
console.log(john);

// position of item in array
console.log(john.indexOf(1998));

var isDeveloper = john.indexOf('developer') === -1 ? 'John is NOT a developer' : 'John IS a developer';
console.log(isDeveloper);


*/


/*************************************
 *  CODING CHALLENGE 3
*/

/*
    Bills $124, $48, $268
    
    Tips 20% bills less than $50, 15% bills between $50 and $200, 10% for bills more than $200
    
    Create array with all three tips (tip for each bill)
    
    Create array with all three final paid ammounts
*/

/*
function calculateTip(bill){
      if(bill < 50){ return bill * 0.2;}
      else if(bill >= 50 && bill < 200){return bill * 0.15;}
      else {return bill * .1;}
}

var tipsArray = [calculateTip(124), calculateTip(48), calculateTip(268)];
console.log(tipsArray);

var billsArray = [calculateTip(124) + 124, calculateTip(48) + 48, calculateTip(268) + 268];
console.log(billsArray);

//lecturer solution
function tipCalculator(bill)
 {
     var percentage;
     if (bill < 50)
         {
             percentage = .2;
         }
     else if (bill >= 50 && bill < 200)
         {
             percentage = .15;
         }
     else
         {
             percentage = .1;
         }
     return percentage * bill;
 }

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
           tipCalculator(bills[1]),
            tipCalculator(bills[2]),
           ];
console.log(tips);

var totalBills = [bills[0] + tips[0],
                 bills[1] + tips[1],
                 bills[2] + tips[2]
                 ];
console.log(totalBills);


*/



/*************************************
 *  Objects and properties
*/

/*
// object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1997,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'Developer',
    isMarried: false
};

console.log(john);
console.log(john.lastName);
console.log(john.job);
console.log(john['firstName']);

var x = 'birthYear';
console.log(john[x]);

//mutate properties
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1948;
jane['lastName'] = 'Charles';
console.log(jane);

*/



/*************************************
 *  Objects and Methods
*/

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1997,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'Developer',
    isMarried: false,
    calcAge: function(){
       this.age = 2019 - this.birthYear;
    }
};

john.calcAge();

console.log(john);

*/



/*************************************
 *  Coding Challenge 4
*/

/*
   Calculate Mark and John BMI (body mass index)

   BMI = mass / height * height (mass in kg and height in meter)
   
   Create object with properties for their fullname, mas, and height and a method to calculate their BMI, save the BMI to the object and also return it.
   
   Log to the console who has the highest BMI, together with their full name and respective BMI, also consider they might have the same BMI
*/

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.7,
    mass: 85,
    calcBMI: function(){
     return this.BMI = this.mass / (this.height * this.height);    
    }
};

var mark = {
    firstName: 'Mark',
    lastName: 'Jones',
    height: 1.6,
    mass: 94,
    calcBMI: function(){
     return this.BMI = this.mass / (this.height * this.height);    
    }
};



var johnBMI = john.calcBMI();

var markBMI = mark.calcBMI();


if(johnBMI > markBMI)
  {
      console.log(john.firstName + ' ' + john.lastName + ' has a higher BMI of ' + john.BMI);
  }
else if(markBMI > johnBMI)
  {
      console.log(mark.firstName + ' ' + mark.lastName + ' has a higher BMI of ' + mark.BMI);
  }
else
  {
      console.log(mark.firstName + ' ' + mark.lastName + ' and ' + john.firstName + ' ' + john.lastName + ' both have the same BMI of ' + mark.BMI, john.BMI);
  }
*/


/*
// lecturer's solution

var john = {
    fullName: 'John Smith',
    mass:  92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    fullName: 'Mark Miller',
    mass:  78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};


if(john.calcBMI() > mark.calcBMI()){
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
}
else if(mark.bmi > john.bmi){
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
}
else{
    console.log('They have the same BMI');
}

*/


/*************************************
 *  Loops and iteration
*/

/*
for(var i = 0; i < 10; i++)
    {
        console.log(i);
    }



var john = ['John', 'Smith', 1998, 'developer', false];

for(var i = 0; i < john.length; i++){
    console.log(john[i]);
}


var i = 0;
while(i < john.length){
    console.log(john[i]);
    i++;
}

*/

/*
//continue and break statements

var john = ['John', 'Smith', 1998, 'developer', false];

for(var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for(var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}


//looping backwards

for(var i = john.length - 1; i >= 0; i--){
    console.log(john[i]);
}
*/








/*************************************
 *  Challenge 5
*/

/*
  John and his familt went to five different restaurants, the bills were $124, $48, $268, $180, and $42.

  John tips 20% when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than £200.

  Implement a tip calculator using objects and loops:
  1.  Create and object with an array for the bill values
  2. Add method to calculate tip
  3.  Method should include a loop to iterate over all the paid bills and do the tip calculations
  4.  As an output, create 1. a new array containing all tips and 2. an array containing final paid amounts (bill + tip)
      HINT: start with two empty arrays and fill them up in the loop.
      
 EXTRA:  Mark's family also went on holiday, going to 4 different restaurants.  The bill was $77, $375, $110 and $45.  Mark likes to tip 20% when the bills is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300.  
 
  5. Implement the same functionality as before using Mark's rules.
  6. Create a function (not method) to calculate the average of a given array of tips.  
      HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0) after you have the sum of the array, divide it by the number of the average elements in it.
  7. Calculate the average tip for each family
  8.  Log to the console which family paid the highest tips on average

    
*/

/*
 var john = {
     bills: [124, 48, 268, 180, 42],
     tips: [],
     totalBill : [],
     tipCalc : function(){
         for(var i = 0; i < this.bills.length; i++){
             if(this.bills[i] < 50)
                 {
                     this.tips[i] = this.bills[i] * .2;
                     this.totalBill[i] = this.bills[i] + this.tips[i];
                 }
             else if(this.bills[i] >= 50 && this.bills[i] < 200)
                 {
                     this.tips[i] = this.bills[i] * .15;
                     this.totalBill[i] = this.bills[i] + this.tips[i];
                 }
             else
                 {
                     this.tips[i] = this.bills[i] * .1;
                     this.totalBill[i] = this.bills[i] + this.tips[i];
                 }       
         }
         return this.tips;
     }
 }

 var mark = {
     bills: [77, 375 ,110 , 45],
     tips: [],
     totalBill : [],
     tipCalc : function(){
         for(var i = 0; i < this.bills.length; i++){
             if(this.bills[i] < 100)
                 {
                     this.tips[i] = this.bills[i] * .2;
                     this.totalBill[i] = this.bills[i] + this.tips[i];
                 }
             else if(this.bills[i] >= 100 && this.bills[i] < 300)
                 {
                     this.tips[i] = this.bills[i] * .1;
                     this.totalBill[i] = this.bills[i] + this.tips[i];
                 }
             else
                 {
                     this.tips[i] = this.bills[i] * .25;
                     this.totalBill[i] = this.bills[i] +this.tips[i];
                 } 
         }
         return this.tips;
     }
 }

function averageTips(tips){
       var totalTips = 0;
       var averageTips = 0;
       for(var i = 0; i < tips.length; i++){
          totalTips = tips[i] + totalTips;
        }
    return averageTips = totalTips / tips.length;      
  }

var markTips = averageTips(mark.tipCalc());
var johnTips = averageTips(john.tipCalc());

console.log('John family average tips: ' + johnTips + ' and Mark family tips: ' + markTips);



if(markTips > johnTips)
    {
        console.log('Mark\'s family paid the most tips, with an average of: ' + markTips);
    }
else if(johnTips > markTips)
    {
        console.log('John\'s family paid the most tips, with an average of: ' + johnTips);
    }
else
   {
       console.log('Both families paid the same average tips: ' + johnTips, markTips);
   }

*/


//lecturer's solution

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 100, 42],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];
        
        for(var i = 0; i < this.bills.length; i++)
          {
              var percentage;
              var bill = this.bills[i];
              if(bill < 50)
                  {
                      percentage = .2;
                  }
              else if(bill >= 50 && bill < 200)
                  {
                      percentage = .15;
                  }
              else
                  {
                      percentage = .1;
                  }
              
              this.tips[i] = bill * percentage;
              this.finalValues[i] = bill + bill * percentage;
          }
    }
}


var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];
        
        for(var i = 0; i < this.bills.length; i++)
          {
              var percentage;
              var bill = this.bills[i];
              if(bill < 100)
                  {
                      percentage = .2;
                  }
              else if(bill >= 100 && bill < 300)
                  {
                      percentage = .1;
                  }
              else
                  {
                      percentage = .25;
                  }
              
              this.tips[i] = bill * percentage;
              this.finalValues[i] = bill + bill * percentage;
          }
    }
}

function calcAverage(tips){
    var sum = 0;
    for(var i = 0; i < tips.length; i++)
        {
            sum = sum + tips[i];
        }
    return sum / tips.length;
}


john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);

if(john.average > mark.average){
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
}
else if(mark.average > john.average){
   console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average); 
}








