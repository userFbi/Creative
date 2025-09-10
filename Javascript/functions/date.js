// Date Functions -
Date();
getDate();
getDay();
getFullYear();
getHours();
getMinutes();
getMonth();
getSeconds();
getTime();

// Creating Date Objects
let now = new Date(); // Current date & time
let d1 = new Date("2025-08-21"); // Specific date
let d2 = new Date(2025, 7, 21, 10); // Year, Month(0-11), Day, Hour

// 1. Get Date and Time
let today = new Date();

today.getFullYear(); // 2025
today.getMonth(); // 0-11 (0 = Jan, 7 = Aug)
today.getDate(); // Day of month (1-31)
today.getDay(); // Day of week (0=Sunday, 6=Saturday)
today.getHours(); // 0-23
today.getMinutes(); // 0-59
today.getSeconds(); // 0-59
today.getMilliseconds(); // 0-999
today.getTime(); // Timestamp (ms since Jan 1, 1970)

// 2. Set Date and Time
let date = new Date();
date.setFullYear(2030);
date.setMonth(11); // December
date.setDate(25); // 25th
date.setHours(10);
date.setMinutes(30);

// 3. Formatting Dates
// let now = new Date();
now.toDateString(); // "Thu Aug 21 2025"
now.toTimeString(); // "08:30:00 GMT+0530..."
now.toLocaleDateString(); // "21/8/2025" (based on locale)
now.toLocaleTimeString(); // "8:30:00 AM"

// 4. Working with Timestamps
Date.now(); // Current timestamp in milliseconds

// let d1 = new Date("2025-01-01");
// let d2 = new Date("2025-12-31");
let diff = d2 - d1; // difference in ms
let days = diff / (1000 * 60 * 60 * 24); // convert to days
console.log(days); // 364
