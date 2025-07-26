const readline = require('readline');
const caesarCipher = require('./caesarCipher');
const indianCurrencyFormat = require('./indianCurrencyFormat');
const combineLists = require('./combineLists');
const minimizingLoss = require('./minimizingLoss');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Menu
console.log('Choose an operation:');
console.log('1. Caesar Cipher');
console.log('2. Indian Currency Format');
console.log('3. Combine Lists');
console.log('4. Minimizing Loss');

rl.question('Enter your choice (1-4): ', (choice) => {
  switch (choice.trim()) {
    case '1':
      rl.question('Enter text: ', (text) => {
        rl.question('Enter shift number: ', (shift) => {
          console.log('Encrypted:', caesarCipher(text, parseInt(shift)));
          rl.close();
        });
      });
      break;

    case '2':
      rl.question('Enter amount: ', (amount) => {
        console.log('Formatted:', indianCurrencyFormat(parseFloat(amount)));
        rl.close();
      });
      break;

    case '3':
      rl.question('Enter first list (comma-separated): ', (list1) => {
        rl.question('Enter second list (comma-separated): ', (list2) => {
          const arr1 = list1.split(',').map(item => item.trim());
          const arr2 = list2.split(',').map(item => item.trim());
          console.log('Combined:', combineLists(arr1, arr2));
          rl.close();
        });
      });
      break;

    case '4':
      rl.question('Enter list of prices (comma-separated): ', (prices) => {
        const priceArray = prices.split(',').map(n => parseInt(n.trim()));
        console.log('Min Loss:', minimizingLoss(priceArray));
        rl.close();
      });
      break;

    default:
      console.log('Invalid choice.');
      rl.close();
  }
});
