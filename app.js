// let Person = prompt("Please enter your name", "Your Name");
// if (Person != null) {
//   console.log("Hello" + Person);
// }
// let Gender = prompt("Your Gender", "Male Or Famale");
// if (Gender == "Male") {
//   alert("Welcome" + "Mr" + Person);
// } else if (Gender == "Famele") alert("Welcome" + "Ms" + Person);
// else {
//   alert("Welcome");
// }

// let $confirm = confirm("Do You Want Order");
// if ($confirm == true) {
//   let Order = prompt(
//     "Please Chose Your Order",
//     "Dount , Coffee , Ice Crema , Bakery"
//   );
//   alert("Thier Order Is Gitting Prepared");
//   console.log(Person + "Your Order" + Order);
// } else {
//   alert("Welcome");
// }

//Q1 : comparison

// let multiply = -5 * 3;
// console.log(multiply);
// let add = "JavaScript" + 50;
// console.log(add);
// let per = 17 % 5;
// console.log(per);
// let divide = 5 / 10;
// console.log(divide);
// let id = 4 === "4";
// console.log(id);
// let word = "Hello" + 5;
// console.log(word);
// let math = Math.ceil(4.5) - Math.floor(7.5);
// console.log(math);
// let power = Math.pow(5, 2);
// console.log(power);

// Q2:inter a number in prompt and read in alert//

// let number = prompt("inter a number");
// alert(number);

//Q3:Read in two numbers and display them in ascending order//
// let first = prompt("inter first number");
// let second = prompt("inter second number");
// if (first > second) {
//   console.log(first, second);
// } else {
//   console.log(second, first);
// }

//Q4: Read in two numbers and display the larger//

// let larg1 = prompt("Type The First Number");
// let larg2 = prompt("Type The Two Number");
// if (larg1 > larg2) {
//   alert(larg1);
// } else {
//   alert(larg2);
// }

//Q5:Read two numbers and display their sum. //
// let sum1 = 10;
// let sum2 = 20;
// let sum = sum1 + sum2;
// console.log(sum1 + sum2);

// Q6: If you have a “Number” variable,  Your task is to print
// let NUMBER = 1;
// switch (NUMBER) {
//   case 1:
//     console.log("ONE");
//     break;
//   case 2:
//     console.log("TWO");
//     break;
//   case 3:
//     console.log("THREE");
//     break;
//   case 4:
//     console.log("FOUR");
//     break;
//   case 5:
//     console.log("FIVE");
//     break;
//   case 6:
//     console.log("SEX");
//     break;
//   case 7:
//     console.log("SEVEN,");
//     break;
//   case 8:
//     console.log("EIGHT");
//     break;
//   case 9:
//     console.log("NINE");
//     break;
//   default:
//     console.log("PLEASE TRY AGAIN");
// }

//EX2////////////////////////////////////////////////////////////////////////////
// let gender = prompt("Enter Your Gender", "male or famele");
// while (gender != "famele" && gender != "male") {
//   gender = prompt("Enter Your Gender");
// }
/////////////////////////////////////////////////////////////////////////////////
// let arr = [];
// arr[0] = prompt("Enter Your Name", "Your Name");
// arr[1] = prompt("Enter Your Gender", "Your Gener");
// arr[2] = prompt("Enter TypeOf Order", "Dount , Ice Coffee ...");
// arr[3] = prompt("Order Name");
// alert(arr);
/////////////////////////////////////////////////////////////////////////////////
// let arr = [];
// arr[0] = prompt("Enter Your Name", "Your Name");
// arr[1] = prompt("Enter Your Gender", "Your Gener");
// arr[2] = prompt("Enter TypeOf Order", "Dount , Ice Coffee ...");
// arr[3] = prompt("Order Name");
// for (let i = 0; i <= arr.length; i++) {
//   console.log(arr[i]);
// }
///////Q7/////////////////////////////////////////////////////////
// for (i = 0; i <= 5; i++) {
//   alert(i);
// }
////Q8///////////////////////////////////////////////
// let num = "";
// for (let i = 1; i <= 5; i++) {
//   num += i;
// }
// alert(num);
//Q9/////////////////////////////////////////////////
// let num = "";
// for (let i = 1; i <= 20; i++) {
//   if (i % 3 == 0) {
//     num += i;
//   }
// }
// alert(num);
///Q10///////////////////////////////////////////////////////////////////////////
// let hun = prompt("Inter Number Between 0-100", "Enter Number");
// while (hun > 100) {
//   alert("Error");
//   hun = prompt("Inter Number Between 0-100", "Enter Number");
// }
/////Q11//////////////////////////////////////////////////////////////////////////
// let int = prompt("Enter Integer Number", "Integer Number");
// let ave = 0;
// for (let i = 0; i <= int; i++) {
//   ave = ave + i;
// }
// alert(ave);
