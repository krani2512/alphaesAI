/*//CODING CHALLENGE 7
// 1. Create objects for Mark and John
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  BMI: 0,
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  BMI:0; 
};

// 2. Calculate BMIs by calling the method and storing the result
markBMI = mark.mass / (mark.height * mark.height);
johnBMI = john.mass / (john.height * john.height);

// 3. result
if (markBMI > johnBMI) {
  console.log(`${mark.fullName}'s BMI (${markBMI.toFixed(2)}) is higher than ${john.fullName}'s (${johnBMI.toFixed(2)})!`);
} else if (johnBMI > markBMI) {
  console.log(`${john.fullName}'s BMI (${johnBMI.toFixed(2)}) is higher than ${mark.fullName}'s (${markBMI.toFixed(2)})!`);
} else {
  console.log("Both have the same BMI (${markBMI})!");
}
// 3. result
if (markBMI > johnBMI) {
  console.log(`${mark.fullName}'s BMI (${markBMI.toFixed(2)}) is higher than ${john.fullName}'s (${johnBMI.toFixed(2)})!`);
} else if (johnBMI > markBMI) {
  console.log(`${john.fullName}'s BMI (${johnBMI.toFixed(2)}) is higher than ${mark.fullName}'s (${markBMI.toFixed(2)})!`);
} else {
  console.log("Both have the same BMI (${markBMI})!");
}
*/

//.............................................................................................................................................................................................................//

//CODING CHALLENGE 8

  // 1. Bills array
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Empty arrays
const tips = [];
const totals = [];

//  calcTip function
const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
};

// 3. Loop to calculate tips and totals
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);

// 4. BONUS: Function to calculate average
const calcAverage = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // add current element to sum
  }
  return sum / arr.length;
};

// Call calcAverage on totals
console.log("Average of totals:", calcAverage(totals));
