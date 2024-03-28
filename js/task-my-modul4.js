// function countProps(object) {
//   return Object.keys(object).length;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const salaryValues = Object.values(salaries)
//     for (const salary of salaryValues) {
//         totalSalary += salary;
//     }
//     return totalSalary;
// }

// console.log(countTotalSalary({})); // Повертає 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // Повертає 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // Повертає 400

// !!!!!!!!!!!!
// Використовуючи синтаксис залишкових параметрів,
//доповни код функції add() так,
// щоб вона приймала будь - яку кількість аргументів у параметр args і повертала їхню суму.

// Оголошена функція add
// Функція add оголошує параметр args
// Для збирання аргументів у змінну args у підписі функції використовується
//синтаксис залишкових параметрів

// function add(...args) {
//   let sum = 0;
//   for (const num of args) {
//     sum += num;
//   }
//   return sum;
// }

// console.log(add(15, 27)); // Виведе: 42
// console.log(add(12, 4, 11, 48)); // Виведе: 75
// console.log(add(32, 6, 13, 19, 8)); // Виведе: 78

// function addOverNum(value, ...args) {
//     let sum = 0;
//     for (const totalAmount of args) {
//         if (totalAmount > value) {
//            sum += totalAmount;
//         }
//     }
//     return sum;
// }

// console.log(addOverNum(50, 15, 27)); // Поверне 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // Поверне 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // Поверне 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // Поверне 218

// function getExtremeScores(scores) {
//     const best = Math.max(...scores);
//     const worst = Math.min(...scores);
//     return { best, worst }
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); // Поверне об'єкт { best: 93, worst: 17 }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24])); // Поверне об'єкт { best: 81, worst: 4 }
// //!! перебір об'єкта🤬
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = ['descr', 'rating', 'price'];
// const values = [];
// for (const keyIndex in keys) {
//   const key = keys[keyIndex]; //!!!без цїєї змінної

//   values.push(apartment[key]); //! А тут записати  values.push(apartment[keyIndex])
// }
// console.log(values);
//!МАСИВ Об'єКТІВ
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
//? Розвязання видалене..
// console.log(hexColors);

// console.log(rgbColors);
//! Пошук об'єкта за значенням властив
// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//? Розвязання видалене..
//     ]; }

// console.log(getProductPrice("Radar")); // Повертає 1300
// console.log(getProductPrice("Grip")); // Повертає 1200
// console.log(getProductPrice("Scanner")); // Повертає 2700
// console.log(getProductPrice("Droid")); // Повертає 400
// console.log(getProductPrice("Engine")); // Повертає null

// !!! it's HARD
//!!Колекція значень властивості
//function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   const keys = [];
//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) {
//       keys.push(product[propName]);
//     }
//   }
//   return keys;
// }

// console.log(getAllPropValues('name')); // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues('quantity')); // [4, 3, 7, 9]
// console.log(getAllPropValues('price')); // [1300, 2700, 400, 1200]
// console.log(getAllPropValues('category')); // []

// ???? #2
// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   //? Розвязання видалене..
// }

// console.log(calculateTotalPrice('Blaster')); // "Product Blaster not found!"
// console.log(calculateTotalPrice('Radar')); // 5200
// console.log(calculateTotalPrice('Droid')); // 2800
// console.log(calculateTotalPrice('Grip')); // 10800
// console.log(calculateTotalPrice('Scanner')); // 8100
// !!!!!!

//!! МЕТОДИ ОБ'ЄКТА
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (let potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };
// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.getTotalPrice());
//
