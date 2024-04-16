/*JavaScript Fundamentals – Part 1

Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.

*/

const marksheight = 1.88;
const marksWeight = 95;

const jhonHeight = 1.76;
const jhonWeight =  85;

const jhonBMI = jhonWeight + jhonHeight ** 2 ;
const marksBMI = marksWeight + marksheight ** 2;

const markHigherBMI = jhonBMI > marksBMI;

// which gives the output on console 
console.log("Jhon's BMI : " + jhonBMI  +",  " +   "mark's BMI : " + marksBMI +",  "+ markHigherBMI);


/*
Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

*/
  

// 1. 
if(markHigherBMI == true )
     console.log("Mark's BMI is higher than John;s!");
else    
    console.log("John's BMI is higher than Marks's!");

// 2.using template literal displaying the message 

console.log( `Mark's BMI (${marksBMI}) is higher than jhon's (${jhonBMI})!`);


/*
Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// data of Dolphin team with avg 
const dolphinData1 = 96;
const dolphinData2 = 89;
const dolphinData3 = 101;
const avgDolphis = (dolphinData1 + dolphinData2 + dolphinData3 ) / 3 ;

// data of Koalas team with avg 
const koalasData1 = 96;
const koalasData2 = 10;
const koalasData3 = 106;
const avgKoalas = (koalasData1 + koalasData2 + koalasData3 ) / 3;

// console which displays who has higher average 
console.log(`avg of Dolphin team : (${avgDolphis})
avg of Koalas team L (${avgKoalas})`);

// problem statement 2 to print who has avg 
if(avgDolphis === avgKoalas)
    console.log("Both the teams wins the trophy.🏆");
else if(avgDolphis > avgKoalas)
    console.log('Dolphin team wins the trophy.🏆');
else 
    console.log('Koalas team wins the trophy.🏆');


// Bonus part 
if(avgDolphis < avgKoalas && avgKoalas>= 100)
    console.log('Koalas team wins the trophy.🏆');
else if(avgDolphis > avgKoalas && avgDolphis >= 100)
    console.log('Dolphin team wins the trophy.🏆');
else if(avgKoalas>= 100 && avgDolphis >= 100)
    console.log("Both the teams wins the trophy.🏆");
else 
    console.log('No one wins the trophy.');