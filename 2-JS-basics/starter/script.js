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