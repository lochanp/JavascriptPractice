var name=prompt("Enter your name here");
// var sliceFirst = name.slice(0,1).toUpperCase();
// var restOfTheName =  name.slice(1,name.length);
// restOfTheName =restOfTheName.toLowerCase();
// var firstlettcaps = alert("your name is " + sliceFirst + restOfTheName);

var names =['Lochan','Potdar','Who','Me'];
// for(var i=0;i<=names.length;i++) {
//     if(name === names[i]) {
//         console.log('welcome')
//     }
//     else {
//         console.log('Go away')
//     }
    
// }
if(names.includes(name)) {
    alert('you are welcome')
}
else {
    alert('not welcome')
}

for(let i=0;i<=100;i++) {
    if(i%2 ==! 0) {
        console.log(i);
    }
    
}

// var firstName = prompt("Enter your name");
// var secondName = prompt("Enter your partner's name");
// var n = (Math.random()*100)
// n =Math.floor(n)+1;
// alert(n +"%");

function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("Buy "+ Math.floor(money/1.5) + " bottles");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  getMilk(5);

function bmiCalculator (weight, height) {
    var bmi = Math.round(weight/(height*height));
    if(bmi <= 18.5) {
         var interpretation ="Your BMI is "+bmi+", so you are underweight.";
    }
    else if(bmi > 18.5 && bmi < 24.9) {
        interpretation ="Your BMI is "+bmi+", so you have normal weight.";
    }
    else if(bmi > 24.9) {
        interpretation ="Your BMI is "+bmi+", so you are overweight.";
    }
    return interpretation;
}
console.log(bmiCalculator(100,1.5));

function isLeap(year) {
    if(year%4===0) {
        return 'Leap year.';
    }
    else if(year%100==!0) {
        return 'Not leap year.';
    }
    else if(year%100===0 && year%400===0) {
        return 'Leap year.';
    }
    else {
        return 'Not leap year.';
    }
}
isLeap(2401);

var output=[];
var count =1;
function fizzBuzz() {
    if(count%3===0 && count%5===0) {
        output.push('fizzBuzz')
    }
    else if(count%3===0) {
        output.push('fizz')
    }
    else if(count%5===0) {
        output.push('Buzz')
    }
    else {
        output.push(count);
    }
    count++;
    console.log(output);
}
console.log(fizzBuzz());

 var bottles = 100
 function beer() {
     while(bottles >= 1) {
        console.log(bottles+ " bottles of beer on the wall, "+bottles+" bottles of beer");
        console.log("Take one down and pass it around");
            bottles--;
  
        }
     }
beer();
// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }

var output = [];
function fibonacciGenrator(n) {
    if(n === 1) {
        output =[0];
    }
    else if(n === 2) {
        output = [0,1]
    }
    else {
        output = [0,1];
        for(var i=2; i < n;i++) {
            output.push(output[output.length -2]+output[output.length -1]);
        } 
    }
    return output;
}
console.log(fibonacciGenrator(10));
