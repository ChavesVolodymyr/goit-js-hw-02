// Функція createReversedArray() може приймати довільну кількість аргументів.
//  Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку.
//     Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив[3, 2, 1].
//     Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.

// Оголошена функція createReversedArray()
// Виклик функції createReversedArray(12, 85, 37, 4) повертає [4, 37, 85, 12]
// Виклик функції createReversedArray(164, 48, 291) повертає [291, 48, 164]
// Виклик функції createReversedArray(412, 371, 94, 63, 176) повертає [176, 63, 94, 371, 412]
// Виклик функції createReversedArray() повертає []

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
// // ?? до чого тут 0.2???

// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(200, 0.1));
// console.log(calculateTax(100, 0.2));
// console.log(calculateTax(200, 0.2));
// console.log(calculateTax(100, 0.3));
// console.log(calculateTax(200, 0.3));
// console.log(calculateTax(100));
// console.log(calculateTax(200));

// ?????домашня робота №3

// function filterArray(numbers, value) {
//     let result = [];
//     for (let i = value; i < numbers.length; i++) {
//         if (numbers[i] > value) {
//           result.push (i)
//         }
//     }
//     return result
// }


// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]


// function filterArray(numbers, value) {
//     let result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       result.push(numbers[i]);
//     }
//   }
//   return result;
// }


// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]