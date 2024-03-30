// !!!! INLAIN-CALLBACK

// !!!! Метод forEach(callback)
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function calculateTotalPrice(orderedItems) {
//     totalPrice += orderedItems;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//!! Стрілочні функції

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity / pricePerItem;
// };
// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60)); // 480
// console.log(calculateTotalPrice(3, 400)); // 1200

//!! КОЛБЕКИ

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
//**Рефакторинг^^^ */
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;
//   orderedItems.forEach(item => (totalPrice += item));
//   return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// const filterArray = (numbers, value) => {
//   const result = [];
//   numbers.forEach(number => {
//     if (number > value) {
//       result.push(number);
//     }
//   });
//   return result;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
//!!! ЧИСТІ ФУНКЦІЇ
// const changeEven = (numbers, value) => {
//   return numbers.map(number => { //* чому тут потрібний return?
//     if (number % 2 === 0) {
//       return number + value;
//     } else {
//       return number;
//     }
//   });
// };
///!!! Передивитись!
// const changeEven = (numbers, value) => {
//   const result = [];
//   numbers.forEach(number => {
//     //* чому тут потрібний return?
//     if (number % 2 === 0) {
//       result.push(number + value);
//     } else {
//       result.push(number);
//     }
//   });
//   return result;
// };
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

//! Method MAP

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'Enemy of God',
//     author: 'Bernard Cornwell',
//     rating: 8.67,
//   },
// ];

// const titles = books.map(book => book.title);
// console.log(titles);
// !!!!!!!!
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// // const getUserEmails = users => users.flatMap(user => user.skills);
// const getUserEmails = users => users.map(user => user.skills);
// // const getUserEmails = users => {
// //   return users.map(user => user.email);
// // };

// console.log(getUserEmails(users));

// ** FILTER() **\\
// ! Виведення не парних і парних чисел.
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(numbers => numbers % 2 === 0);
// const oddNumbers = numbers.filter(numbers => numbers % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// ** Метод filter() на масиві об'єктів**\\

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood',
// author: 'Tanith Lee',
//   rating: 7.94
// },
//   { title: 'Enemy of God',
// author: 'Bernard Cornwell',
//   rating: 8.67
// },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];
// const getUsersWithEyeColor = (users, color) => {
//   if (color === 'blue') {
//     return users.filter(user => user.eyeColor === color);
//   } else if (color === 'green') {
//     return users.filter(user => user.eyeColor === color);
//   } else if (color === 'brown') {
//     return users.filter(user => user.eyeColor === color);
//   }
//   return [];
// };

// console.log(getUsersWithEyeColor(users, 'green'));
// !!! ЗАДАЧА !!!\\\

// users[0].age = 37;
// users[1].age = 34;
// users[2].age = 24;
// users[3].age = 21;
// users[4].age = 27;
// users[5].age = 38;
// users[6].age = 39;

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age >= minAge && user.age <= maxAge);
// };
// console.log(getUsersWithAge(users, 20, 30));

// ** FIND()** \\
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };

// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// * Метод reduce() і масив об'єктів
//передивитись!
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// // const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
// //   return acc + player.playtime / player.gamesPlayed;
// // }, 0);
// // console.log(totalAveragePlaytimePerGame);
// //???Прийняла автоперевірка
// // const playtimes = Object.values(players); // [1270, 468, 710, 244]

// // const totalPlayTime = playtimes.reduce((previousValue, number) => {
// //   return previousValue + number;
// // }, 0);

// // const averagePlayTime = totalPlayTime / playtimes.length;
// // console.log(averagePlayTime);
// //???Прийняла автоперевірка^^^^

// const calculateTotalBalance = users => {
//   return users.reduce((previousValue, user) => {
//     return previousValue + user.balance;
//   }, 0);
// };
// console.log(calculateTotalBalance(users));

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating >= MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((a, b) => a.localeCompare(b));
// console.log(names);
