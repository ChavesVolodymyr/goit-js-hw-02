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

console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
console.log(calculateEngravingPrice('Web-development is creative work', 40));
// ?????домашня робота №3
