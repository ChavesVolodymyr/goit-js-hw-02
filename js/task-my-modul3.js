// Функція createReversedArray() може приймати довільну кількість аргументів.
//  Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку.
//     Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив[3, 2, 1].
//     Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.

// function createReversedArray(...args) {
//   return args.reverse();
// }
// console.log(createReversedArray(12, 85, 37, 4));
// console.log(createReversedArray(164, 48, 291))
// console.log(createReversedArray(412, 371, 94, 63, 176))
// console.log(createReversedArray())

// Функція calculateTax(amount, taxRate) оголошує два параметри:

// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

// Оголошена функція calculateTax(amount, taxRate)

// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate
// }

// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(200, 0.1));
// console.log(calculateTax(100, 0.2));
// console.log(calculateTax(200, 0.2));
// console.log(calculateTax(100, 0.3));
// console.log(calculateTax(200, 0.3));
// console.log(calculateTax(100));
// console.log(calculateTax(200));

// function calculateEngravingPrice(message, pricePerWord) {
//   const strings = message.split(' ').length;
//   const result = strings * pricePerWord;
//   return result;
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function getEvenNumbers(start, end) {
//   let total = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       total.push(i); //!якщо додати return поверне 1
//     }
//   }
//   return total;
// }
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(7, 7));
// function checkStorage(storage, item) {
//   const caseItem = item.toLowerCase();

//   if (storage.includes(caseItem)) {
//     return `${caseItem} is available to order!`;
//   } else {
//     return 'Sorry! We are out of stock!';
//   }
// }
// console.log(checkStorage(['apple', 'plum', 'pear'], 'plum'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'orange'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pear'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));

//*Метод includes() задачка №2 в ЛМС
//!!! не зрозуміле розвязання
// function getCommonElements(array1, array2) {
//   const getArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     const currentElement = array1[i];
//     if (array2.includes(currentElement)) {
//       getArray.push(currentElement);
//     }
//   }
//   return getArray;
// }
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([1, 2, 3], [2, 4]));

// function calculateTax(amount, taxRate = 0.2) {
//   let totalTax = amount * taxRate;
//   return totalTax;
// }
// console.log(calculateTax(100, 0.1)); // 10
// console.log(calculateTax(200, 0.1)); // 20
// console.log(calculateTax(100, 0.2)); // 20
// console.log(calculateTax(200, 0.2)); // 40
// console.log(calculateTax(100, 0.3)); // 30
// console.log(calculateTax(200, 0.3)); // 60
// console.log(calculateTax(100)); // 20
// console.log(calculateTax(200)); // 40
// ?????домашня робота №3
