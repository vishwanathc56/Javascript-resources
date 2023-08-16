To get the date difference from today's date to a custom date in yy mm dd format, you can use the JavaScript Date object and some simple math. Here's an example:

// Custom date in 'yy mm dd' format
const customDateStr = '22 02 2022';

// Convert custom date string to a Date object
const customDate = new Date(`20${customDateStr}`);

// Get the difference between the custom date and today's date in milliseconds
const diff = customDate - Date.now();

// Convert milliseconds to years, months, and days
const msInDay = 24 * 60 * 60 * 1000;
const years = Math.floor(diff / (365 * msInDay));
const months = Math.floor((diff % (365 * msInDay)) / (30 * msInDay));
const days = Math.floor((diff % (365 * msInDay)) % (30 * msInDay) / msInDay);

// Log the difference in 'yy mm dd' format
console.log(`${years} years, ${months} months, ${days} days`);

In this example, we start by defining the custom date as a string in the 'yy mm dd' format. We then convert the string to a Date object using the new Date() constructor. We get the difference between the custom date and today's date in milliseconds using the subtraction operator. We then calculate the number of years, months, and days by dividing the difference by the number of milliseconds in a day, taking into account the approximate number of days in a year and a month. Finally, we log the difference in the yy mm dd format using template literals.
