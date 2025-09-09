/* task - 1
  take a number that how many value user want & store it in an array.
*/

/*
  let dataArray = [];
  let i = prompt("enter how many value you want!");
  for (i; i < 0; i++) {
    let b = prompt("Enter Number :");
    dataArray.push(b);
  }
console.log(dataArray);
*/

/* task - 2
 take a number that how many value user want , if user enter 2 then user have to enter value 2 times &
 store it in an array.
*/

let dataArray = [];
let a = prompt("Enter How Many Value You Want : ");
for (let i = 0; i < a; i++) {
  let b = prompt("Enter Number :");
  dataArray.push(b);
}
let sum = 0;
dataArray.map((el, index) => {
  sum += Number(el);
});
console.log("Stroded Array:", dataArray);
console.log("Sum Of Entered Values:",sum);