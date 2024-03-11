
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

// function checkStorage(storage, item) {
//   const lowerCaseItem = item.toLowerCase(); // Перетворення рядка item до нижнього регістру
//   const isAvailable = storage.includes(lowerCaseItem); // Пошук перетвореного рядка у нижньому регістрі
//   if (isAvailable) {
//     return `${lowerCaseItem} is available to order!`;
//   } else {
//     return "Sorry! We are out of stock!";
//   }
// }
// console.log(checkStorage(["apple", "plum", "pear"], "carrot"));
// console.log(checkStorage(["apple", "plum", "pear"], "orange"));
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
// console.log(checkStorage(["apple", "plum", "pear"], "pear"));
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
// console.log(checkStorage(["apple", "plum", "pear"], "plum"));



//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const time = prompt('enter number')
// const hours = Math.floor(time / 60);
// const minutes = time % 60;
// const modificateHours = String(hours).padStart(2, 0);
// const modificateMinutes = String(minutes).padStart(2, 0);
// console.log(`${modificateHours} : ${modificateMinutes}`);

//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел

// const max = 100;
// const min = 2;
// let total = 0;
// for (let i = max; i >= min; i -= 1){
//   console.log(i);
//   if (i % 2 === 0) {
//     total += i;
//   }
// }
// console.log(total);

// function countTotal(max, min) {
//   let total = 0;
//   for (let i = max; i >= min; i--){
//     console.log(i);
//     if (i % 2 === 0) {
//       total += i;
//     }
//   }
//   return total;
// }
// console.log(countTotal(100, 2));
    

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = Number(prompt('enter number 1-4'))
// let result = ''
// switch (num) {
//   case 1:
//     result = 'winter'
//     break;
//   case 2:
//     result = 'spring'
//     break;
//   case 3:
//     result = 'summer'
//     break;
//   case 4:
//     result = 'autem'
//     break;
//   default:
//     result = 'enter number 1-4'
// }
// console.log(result);

//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

// const login = prompt('login name');
// console.log(login);
// if (login === "Адмін") {
//   const password = prompt('password')
//   // if (password === "Я головний") {
//   //   console.log("Вітаю!");
//   // } else {
//   //   console.log("Невірний пароль!");
//   // }
//   console.log(password === "Я головний" ? "Вітаю!" : "Невірний пароль!");
  
// } else if (login === '' || login === null) {
// console.log("Скасовано");
  
// } else {
//   console.log("Я вас не знаю");
// }

//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz
//    спробувати на свіч кейсі


// function checkNumber(number) {
//    if (number % 3 === 0 && number % 5 === 0) {
//     return 'fizzbuzz'
//   }
//   if (number % 3 === 0) {
//     return 'fizz';
//   }
//   if (number % 5 === 0) {
//     return 'buzz'
//   }
 
//   return 'error'
// }
// console.log(checkNumber(27));

// Попроси користувача ввести своє повідомлення в prompt.
// Після чого виведи в консоль довжину цього повідомлення,
// індекс останнього елемента в повідомленні і
// останній елемент, приведений до верхнього регістру

// const message = prompt('Enter your message');
// console.log(message.length);
// console.log(message.length - 1);
// console.log(message[message.length - 1].toLocaleUpperCase());

// const logins = ["Peter", "John", "Igor", "Sasha"];
// // Напишіть функцію logItems (array), яка приймає
// // масив і використовує цикл for, який для кожного елемента
// //буде виводити повідомлення у форматі:
// //<номер елемента> - <значення елемента>
// //Нумерація має починатись з 1

// function logItems (array) {
//   for (let i = 0; i < array.length; i++){
//     console.log(`${i + 1} - ${array[i]}`);
   
//   }
// }
// console.log(logItems(logins));


// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"
// function checkLogin(array) {
//   const login = prompt('Login')
  // for (const element of array) {
  //   if (login === element) {
  //     return "Доступ дозволено"
  //   }    
  // }
  // return "Користувач не знайден"
  
  
//   if (array.includes(login)) {
//     return "Доступ дозволено"
//   }
//   return "Користувач не знайден"
// }

// console.log(checkLogin(logins));

// Переверни рядок у зворотньому порядку
// const string = "Hello";
// let newString = '';
// for (let i = string.length -1; i >= 0; i--) {

// newString += string[i]
// }
// console.log(newString);



//  * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
//  * маси тіла людини. Для цього необхідно розділити вагу на
//  * квадрат висоти.
//  *
//  * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
//  * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
//  * частини може бути кома.
//  *
//  * Індекс маси тіла необхідно округлити до однієї цифри після коми.
//  */

function calcBMI(weight, height) {
  const  onlyWeight = 
}