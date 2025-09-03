// task
// take a number of value user want , if user enter 2 then user have to enter value 2 times &
// store it in an array.

// let i = prompt("enter how many value you want!");
// for (i; i < 0; i++) {
//   console.log("Hello");
// }

// for (let i = a; i <= a; i++) {}

// while (i < a) {
//     let a = prompt("Enter how many value you want!");
// }

let dataArray = [];
let a = prompt("Enter how many value you want!");
for (let i = 0; i < a; i++) {
  let b = prompt("Enter Number : ");
  dataArray.push(b);
}
console.log(dataArray);
