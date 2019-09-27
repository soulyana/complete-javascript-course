/**
 * Variables and data types
 */
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 23;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var _3years = 3;
var johnMark = 'John and Mark';
// reserved keywords can't use in variables
*/

/**
 * Variable mutation and type coercion
 */
/*
 var firstName = 'John';
 var age = 28;

 // Type coercion
 console.log(firstName + ' ' + age); 

 var job, isMarried;
 job = 'teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 // Variable muation
 age = 'twenty eight';
 job = 'driver';

 alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 var lastName = prompt('What is his last name?');
 console.log(firstName + ' ' + lastName);
*/
 

/**
  * Basic operators
  */
 /*
  var year, yearJohn, yearMark;
  now = 2020;
  ageJohn = 28;
  ageMark = 33;

   // Math operators
  yearJohn = now - ageJohn;
  yearMark = now - ageMark;

  console.log(yearJohn);

  console.log(now + 2);
  console.log(now * 2);
  console.log(now / 10);

  // Logical operators
  var johnOlder = ageJohn < ageMark;
  console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof ' Mark is older than john');
var x;
console.log(typeof x);
*/

/**
 * Operator precedence
 */
/*
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;


// Multiple operators
 var isFullAge = now - yearJohn >= fullAge; //true
 console.log(isFullAge);


// Grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);

 // Multiple assignments
 var x, y;
 x = y = (3 + 5) * 4 - 6; 
 console.log(x);
 console.log(y);
 console.log(x, y);

 // More operators
//  x = x * 2;
 x *= 2;
 console.log(x);
x += 10;
console.log(x);
*/

/**
 * Coding Challenge 1
 */
/*
var weightMark, weightJohn, heightMark, heightJohn, bmiMark, bmiJohn, higherBMI;

weightMark = 300;
heightMark = 50;

weightJohn = 250;
heightJohn = 55;

bmiMark = weightMark / (heightMark * heightMark);
console.log(bmiMark);
bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn);
higherBMI = bmiMark > bmiJohn;

console.log('Is Mark\'s BMI higher than John\'s? ' + higherBMI);
*/

/**
 * Instructor solution
 */
/*
 var massMark = 78; // kg
 var heightMark = 1.69; // meters

 var massJohn = 92;
 var heightJohn = 1.95;

 var BMIMark = massMark / (heightMark * heightMark);
 var BMIJohn = massJohn / (heightJohn * heightJohn);

 var markHigherBMI = BMIMark > BMIJohn;

console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/

/**
 * If / else statements
 */

  var firstName = 'John';
  var civilStatus = 'single';

  if (civilStatus === 'married') {
      console.log(firstName + ' is married!');
  } else {
      console.log(firstName + ' your lover is on the way...');
  }

  var isMarried = true;
  if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' your lover is on the way...');
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

var markHigherBMI = BMIMark > BMIJohn;

// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'sBMI is higher than Mark\'s');
}