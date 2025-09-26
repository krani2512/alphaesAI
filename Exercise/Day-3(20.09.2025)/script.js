/*//Coding Challenge-5

// 1. Arrow function to calculate average
const calcAverage = (A, B, C) => (A + B + C) / 3;

// 2. Test data
// DATA 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

// 3. Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win`);
  } else {
    console.log('No team wins');
  }
}

// 4. Check winner for DATA 1
checkWinner(scoreDolphins, scoreKoalas);

// DATA 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

// Check winner for DATA 2
checkWinner(scoreDolphins, scoreKoalas);
*/
//................................................................................................................................................................................................................//

// Coding Challenge 6

const bills=[125,555,44];

const tips=[];
const total=[];

for(let i=0;i<bills.length;i++)
{
    const tip=(bills[i] >= 50 && bills[i] <= 300) ? bills[i] * 0.15 : bills[i] * 0.2;
    tips.push(tip);
    total.push(bills[i]+tip);

}
console.log("Bills:",bills);
console.log("Tips:",tips);
console.log("Total:",total);
