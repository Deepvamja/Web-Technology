const currentDate = new Date();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const day = currentDate.getDate().toString().padStart(2, '0');

console.log(`Current Date: ${month}/${day}`);
