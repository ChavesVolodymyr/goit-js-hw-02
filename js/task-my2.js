//* Основи ф-цій 1 модуль *\\

//* МОДУЛЬ 2 *\\

//* Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення
// *і повертає повідомлення про результат.Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

//* available - доступна кількість товарів на складі
//* ordered - кількість одиниць товару в замовленні
//* Використовуючи розгалуження, доповни код функції таким чином, щоб:

//* Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0,
//*     функція повертає рядок "There are no products in the order!".
//* Якщо товарів у замовленні більше, ніж їх доступно на складі,
//*     то функція повертає рядок "Your order is too large, there are not enough items in stock!".
//* В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'There are no products in the order!';
//   } else if (available < ordered) {
//     return 'Your order is too large, there are not enough items in stock!';
//   } else {
//     return 'The order is accepted, our manager will contact you';
//   }
// }
// console.log(checkStorage(100, 50)); // Виведе: "The order is accepted, our manager will contact you"
// console.log(checkStorage(100, 130)); // Виведе: "Your order is too large, there are not enough items in stock!"
// console.log(checkStorage(70, 0)); // Виведе: "There are no products in the order!"
// console.log(checkStorage(200, 20)); // Виведе: "The order is accepted, our manager will contact you"
// console.log(checkStorage(200, 250)); // Виведе: "Your order is too large, there are not enough items in stock!"
// console.log(checkStorage(150, 0)); // Виведе: "There are no products in the order!"
// console.log(checkStorage(80, 80)); // Виведе: "The order is accepted, our manager will contact you"

// function checkForName(fullName, firstName) {
//   return fullName.toLowerCase().includes(firstName.toLowerCase());
// }
// console.log(checkForName('Jason Neis', 'Jason')); // Виведе: true
// console.log(checkForName('Jason Neis', 'jAsOn')); // Виведе: true
// console.log(checkForName('Jason Neis', 'Jacob')); // Виведе: false
// console.log(checkForName('Caty Stars', 'Caty')); // Виведе: true
// console.log(checkForName('Caty Stars', 'cAtY')); // Виведе: true
// console.log(checkForName('Caty Stars', 'Andromeda')); // Виведе: false

// function getFileName(file) {
//   const indexFile = file.indexOf('.');
//   if (indexFile === -1) {
//     return file;
//   } else {
//     return file.slice(0, indexFile);
//   }
// }
// console.log(getFileName('styles.css')); // Виведе: "styles"
// console.log(getFileName('app.js')); // Виведе: "app"
// console.log(getFileName('app')); // Виведе: "app"
// console.log(getFileName('index.js')); // Виведе: "index"
// console.log(getFileName('index.html')); // Виведе: "index"
// console.log(getFileName('index.css')); // Виведе: "index"
// console.log(getFileName('index')); // Виведе: "index"

// function calculateTotal(number) {
//   let total = 0;

//   for (let i = 1; i <= number; i++) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateTotal(1)); // Поверне: 1
// console.log(calculateTotal(0)); // Поверне: 0
// console.log(calculateTotal(7)); // Поверне: 28
// console.log(calculateTotal(18)); // Поверне: 171
// console.log(calculateTotal(24)); // Поверне: 300

// function calculateEvenTotal(number) {
//   let total = 0;
//   for (let index = 0; index <= number; index++) {
//     if (index % 2 === 0) {
//       total += index;
//     }
//   }
//   return total;
// }

// function calculateEvenTotal(number) {
//   let total = 0;
//   if (number === undefined) return total; // Якщо число не передано, повертаємо 0

//   for (let i = 2; i <= number; i += 2) {
//     total += i; // Додаємо поточне парне число до загальної суми
//   }

//   return total; // Повертаємо загальну суму
// }

// console.log(calculateEvenTotal(1)); // Поверне: 0
// console.log(calculateEvenTotal(3)); // Поверне: 2
// console.log(calculateEvenTotal(7)); // Поверне: 12
// console.log(calculateEvenTotal(18)); // Поверне: 90
// console.log(calculateEvenTotal(27)); // Поверне: 182

// function calculateTax(amount, taxRate) {
//     for (let index = amount; index < amountrray.length; index++)amount{
//         const element = array[index];
// amount
//     }
// }
