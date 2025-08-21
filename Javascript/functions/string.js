// 1. Length
let str = "Hello World";
console.log(str.length); // 11

// 2. Change Case
"hello".toUpperCase(); // "HELLO"
"WORLD".toLowerCase(); // "world"

// 3. Access Characters
// let str = "JavaScript";
console.log(str[0]); // "J"
console.log(str.charAt(4)); // "S"

// 4. Searching
let text = "I love JavaScript";
text.indexOf("love"); // 2 (position)
text.lastIndexOf("a"); // 13
text.includes("Script"); // true
text.startsWith("I"); // true
text.endsWith("Java"); // false

// 5. Extracting Parts
// let str = "Hello World";
str.slice(0, 5); // "Hello"   (from index 0 to 4)
str.substring(6, 11); // "World"
str.substr(6, 5); // "World"   (start, length) - older

// 6. Replace
"Hello World".replace("World", "JS");
// "Hello JS"
"Hello World".replaceAll("o", "0");
// "Hell0 W0rld"

// 7. Trim (remove spaces)
"   Hi there   ".trim(); // "Hi there"
"   Hi ".trimStart(); // "Hi "
"   Hi ".trimEnd(); // "   Hi"

// 8. Split & Join
// let str = "apple,banana,mango";
str.split(",");
// ["apple", "banana", "mango"]

["apple", "banana"].join(" - ");
// "apple - banana"

// 9. Repeat
"Hi ".repeat(3); // "Hi Hi Hi "

// 10. Template Literals (ES6).
let name = "Tushar";
let greet = `Hello, ${name}!`;
console.log(greet); // "Hello, Tushar!"
