
// function getLength(array) {
//   const backLength = array.join (' ');
//   return backLength.length;
// }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
// console.log(getLength(["Mango", "hurries", "to", "the", "train"])); // 22
// console.log(getLength(["M", "a", "n", "g", "o"])); // 5
// console.log(getLength(["top", "picks", "for", "you"])); // 14



// function calculateEngravingPrice(message, pricePerWord) {
//   const firstString = message.split(' ');
//   const price = firstString.length * pricePerWord;
//   return price;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); // 100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)); // 160
// console.log(calculateEngravingPrice("Web-development is creative work", 20)); // 80


// function getSlice(array, value) {
//   const index = array.indexOf(value);
//   if (index === -1) {
//     return [];
//   } else {
//     return array.slice(0, index + 1);
//   }
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); // ["Mango", "Poly"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax")); // ["Mango", "Poly", "Ajax"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango")); // ["Mango"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob")); // []
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey")); // []


// взагалі не зрозумів
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i]
//   };
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice());

// function getEvenNumbers(start, end) {
//   const evenNumbers = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }

function checkStorage(storage, item) {
  const lowerCaseItem = item.toLowerCase(); // Перетворення рядка item до нижнього регістру
  const isAvailable = storage.includes(lowerCaseItem); // Пошук перетвореного рядка у нижньому регістрі
  if (isAvailable) {
    return `${lowerCaseItem} is available to order!`;
  } else {
    return "Sorry! We are out of stock!";
  }
}
console.log(checkStorage(["apple", "plum", "pear"], "carrot"));
console.log(checkStorage(["apple", "plum", "pear"], "orange"));
console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
console.log(checkStorage(["apple", "plum", "pear"], "pear"));
console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
console.log(checkStorage(["apple", "plum", "pear"], "plum"));

