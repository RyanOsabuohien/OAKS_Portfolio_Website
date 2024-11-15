
/*1. Define a loop which will print out 1 - 100. Also define a loop which will
 print out 1 - 10 to the console without printing out the numbers 4 and 5*
for(let r=1; r<=100; r++){
    console.log(r)
}

for(let r=1; r<=10; r++)
{
    if(r !==4 && r !== 5){
        console.log(r)
    }
} 

/*2. Using a loop and the modulus operator, write a program which will print out
only the even numbers between 10 and 20 and the odd numbers between 20
and 30.
NB: Use only one loop *
for( let m=10; m<=20; m++){
    if(m%2 === 0){
        console.log(m, "is even")
    }
}

for( let m=10; m<=20; m++){
   if(m%2 !== 0){
        console.log(m)
    }
}

/*1. Define a for loop which will print out only the even numbers between 0 and
50.
a. Use the modulus (%) operator in this operation.
b. Do not use the modulus operator in this operation.*
//with modulus operator ;
for( let m=0; m<=50; m++){
    if(m%2 === 0){
        console.log(m)
    }
    }

    //without modulus operator
    for(let o=0; o<=50; o+=2) {
        console.log(o)
    } 

    // Define a loop which will print out the sum of all the numbers between 0 and 20
let sum= 0
for(j=0; j<=20; j++){
    sum +=j
}
console.log(sum) 

// Define a loop which will print out all the odd numbers between 0 and 100.
for(let h=1;h<=100;h+=2){
    console.log(h)
}

/* Define a function which will receive a name and an age, and then within the
function, check if the age which was received is greater than or equal to 18, if
so, print out “Hi John, you are old enough”. If the age is less than 18, print out
“HI John, sorry, but you are not old enough” */
function ageCheck(name, age){
    if(age >= 18) {
        console.log(`Hi ${name}, you are old enough`);
    } else {
            console.log(`Hi ${name}, sorry, but you are not old enough`);
        }
}
//example
let name = "John";
let age = 25
ageCheck(name, age)
let name1 = "Sarah"
let age1 = 17
ageCheck(name1, age1)