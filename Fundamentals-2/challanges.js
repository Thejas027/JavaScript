    'use strict';
/*
                                            JavaScript Fundamentals – Part 2

        Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).

A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time


Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

*/
    console.log("------------------challange-1--------------------");
// general arrow function to find the average of any team 
const avg = (data1,data2,data3)=> (data1+data2+data3) / 3;

// consoles the calculated average of dolphin and koalas 
console.log(`Average of Dolphin : ${avg(85,54,41)}`);   // change the data as requried 
console.log(`Average of Koalas : ${avg(23,34,27)}`);

// function to check who is the winner 
function checkWinner(dolphinAvg,koalasAvg){
    if(dolphinAvg >= 2*koalasAvg)
        console.log(`Dolphin team wins the game.(${dolphinAvg} vs ${koalasAvg})`);
    else if(koalasAvg >= 2*dolphinAvg)
        console.log(`Koalas team wins the game .(${koalasAvg} vs ${dolphinAvg})`);     
    else 
        console.log(`It's a draw. No one wins`) 
}
 checkWinner(avg(85,54,41),avg(85,54,41));


 /*
            Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.


Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data 
below

3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

 */
    console.log("-------------------------challange-2------------");
function calcTip(bill){
    if(bill >=50 && bill <= 300)
        return bill * 0.15;
    if(bill > 300)
        return bill * 20;
    return 0;
}

console.log(`The tip is : ${calcTip(100)}`);

const bills = new Array(125,555,44);
const tips = new Array(calcTip(125),calcTip(555),calcTip(44));
const total = new Array(bills[0]+ tips[0] ,bills[1]+tips[1],tips[tips.length-1]+bills[bills.length-1]);

console.log(`The bill : ${bills}

The tip : ${tips}

The total (bill + total) ; ${total}`);


/*
              Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter) 

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method



3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall

*/

console.log("---------------------challange-2------------------");
const mark = {
    firstName : 'Mark',
    lastName : 'Miller',
    weight : 78,
    height: 1.69,

    // method to calculate the BMI of mark only and returns it 
    calcBMI : function(){
        this.bmi = this.weight / (this.height ** 2)   // the BMI of mark is stored in a new property called bmi
        return this.bmi;
    }

}

const jhon = {
    firstName : 'Jhon',
    lastName : 'Smith',
    weight : 92,
    height : 1.95,

    // method to calculate the BMI of jhon and return it 
    calcBMI : function(){
        this.bmi = this.weight / (this.height * this.height);  // the BMI of mark is stored in a new property called bmi 
        return this.bmi;
    }
    
}

// method - 1 to call the bmi 
// const jhonBmi = jhon.calcBMI();  // first call the function from a object then 
// console.log(`The Bmi of Jhon smith : ${jhonBmi}`);  // console the property 

// method-2  , directly call the function itself 
// console.log(jhon.calcBMI());

// const markBmi = mark.calcBMI();
// console.log(`The Bmi of Mark Miller : ${markBmi}`);


if(jhon.calcBMI() > mark.calcBMI())
    console.log(`${jhon.firstName}'s BMI : ( ${jhon.calcBMI()} ) is higher than ${mark.firstName}'s(  ${mark.calcBMI()} )`);  
else    
    console.log(`${mark.firstName}'s BMI : ( ${mark.calcBMI()} ) is higher than ${jhon.firstName}'s ( ${jhon.calcBMI()} )`);

    /*
                    Coding Challenge #4

                    Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:

1. Create an array 'bills' containing all 10 test bill values

2. Create empty arrays for the tips and the totals ('tips' and 'totals')

3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays 

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:

4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together

4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array

*/

console.log("-------------challange-3---------------");

const steveBills = [22,295,176,440,37,105,10,1100,86,52];
const steveTips =[];
const steveTotals =[];

// loop to find the tips for the bill data
for(let i=0;i<steveBills.length;i++){
    steveTips.push(calcTip(steveBills[i]));
    steveTotals[i] = steveBills[i] + steveTips[i];
}
// console to print the bills 
console.log(`The bill : ${steveBills}`);
// consloes the tip for each bill and prints 
console.log(`The tips : ${steveTips}`);
//console to print the calculated total 
console.log(`The total ( bill + tip ) : ${steveTotals}`);

// code snippent to find the sum of a given array and calcualte its average 
console.log("-------Using loops to find the sum and average-------");
const arr = [1,2,3,4,5,6,7,8,9,10];
function arraySum(arr){
    let sum = 0;
    for(let i=0; i<arr.length;i++)
        sum += arr[i];
        return sum;
}
console.log(`Sum of an array elements : ${arraySum(arr)}`);
console.log(`The average of sum : ${arraySum(arr) / arr.length}`);