// 1. The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.
// let a=+prompt("Enter a number: ");
// for (let i = 0; i < 1000; i++) {
//     if(i%a===0){
//         console.log(i);
//     }
// }

// 2. The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A).
// let a=+prompt("Enter a number: ");
// let counter=0;
// for (let n = 1; n*n<a; n++) {
//     counter++;
// }
// console.log(counter);

// 3. The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.
// let a=+prompt("Enter a number: ");
// let largestDivisor=0;
// for (let divisor = 1; divisor < a; divisor++) {
//     if(a%divisor==0){
//         largestDivisor=divisor;
//     }
// }
// console.log(largestDivisor);

// 4. The user enters 2 numbers (A and B). Print the sum of all numbers from the range A to B that are divisible by 7 without a remainder. 
//(Note that B may be less than A if you type).
// let a=+prompt("Enter a number: ");
// let b=+prompt("Enter a number: ");
// let sum=0;
// if(a<b){
//     for (let n = a; n < b; n++) {
//         if(n%7==0){
//             sum+=n;
//         }
//     }
//     console.log(sum);
// }
// else if(a==b){
//     console.log("Numbers are equal.")
// }
// else{
//     for (let n = b; n < a; n++) {
//         if(n%7==0){
//             sum+=n;
//         }
//     }
//     console.log(sum);
// }

// 5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. 
//In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to 1.
// let a=+prompt("Enter a number: ");
// let n1=1;
// let n2=1;
// let n3=0;
// for (let i = 0; i < a; i++) {
//     n3=n1+n2;
//     n1=n2;
//     n2=n3;
// }
// console.log(n3);

// 6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. (yes, you've got to google this algorithm at first :D ).
// let a=+prompt("Enter a number: "); 
// let b=+prompt("Enter a number: "); 
// let gcd=0;
// let remainder=0;
// if(a>b){
//     while(a%b>0){
//         remainder=a%b;
//         a=b;
//         b=remainder;
//     }
//     gcd=b;
// }
// else{
//     while(b%a>0){
//         remainder = b % a;
//         b = a;
//         a = remainder;
//     }
//     gcd = a;
// }

// 7. The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number,
// for example, given the number 123, output is 321 in this case.
let a=+prompt("Enter a number: "); 




// 8. The user enters 2 numbers. Find out if these two numbers have the same digits. For example, for a pair of 123 and 3456789, 
//the answer would be "YES", and for a pair of 500 and 99, "NO".
