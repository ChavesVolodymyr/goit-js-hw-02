// !!!!! HOMEWORK !!!!! \\

// const profile = {
//   username: 'Jacob',
//   playTime: 300,

//   changeUsername(newName) {
//     this.username = newName;
//   },

//   updatePlayTime(hours) {
//     this.playTime += hours;
//   },
//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername('Marco');
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// Написати ф-цію, яка прибиратиме з масиву всі значення, які перетворюються на false
// undefined, null, false, '', 0, NaN
// const array = [
//   1,
//   0,
//   54,
//   'doc',
//   null,
//   'jpg',
//   undefined,
//   '',
//   'png',
//   'exe',
//   false,
//   'mp4',
//   NaN,
//   'hbs',
// ];
// function checkTrue(array) {
//   const newArray = [];
//   for (const element of array) {
//     if (element) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }
// console.log(checkTrue(array));

// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function sumNumbers(array) {
//   let newArray = [];
//   for (let index = 0; index < array.length - 1; index++) {
//     const current = array[index];
//     const next = array[index + 1];
//     newArray.push(current + next);
//   }
//   return newArray;
// }
// console.log(sumNumbers(someArr));

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage() {
//   let total = 0;
//   let count = 0;
//   for (const arg of arguments) {
//     if (typeof arg === 'number') {
//       total += arg;
//       count += 1;
//     }
//   }
//   return total / count;
// }
// console.log(caclculateAverage(2, 10, 22, 50));

//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//'<ключ>:<значення>' використовуя Object.keys() та for...of
// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}:${user[key]}`);
// }

//2. У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для додавання усіх зарплат та
//збережіть його результат в змінній sum.
//Якщо об'єкт salaries пустий, то результат має бути 0
// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const values = Object.values(salaries);
// let sum = 0;
// for (const value of values) {
//   sum += value;
// }
// console.log(sum);

//3. Напишіть ф-цію calcTotalPrice(fruits, fruitName),
//яка приймає массив об'єктів і
//рядок з назвою фрукта.
//Функція рахує і повертає загальну вартість фрукта
//з таким ім'ям, ціною та кількістю з об'єкта
// const fruits = [
//   { name: 'Яблуко', price: 45, quantity: 7 },
//   { name: 'Апельсин', price: 60, quantity: 4 },
//   { name: 'Банан', price: 125, quantity: 8 },
//   { name: 'Груша', price: 350, quantity: 2 },
//   { name: 'Виноград', price: 440, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let totalPrice = 0;
//   for (const fruit of fruits) {
//      if (fruit.name === fruitName) {
//     totalPrice += fruit.price * fruit.quantity;
//      }
//   }
//   return totalPrice;
// }
// console.log(calcTotalPrice(fruits, 'Яблуко'));

// function calcTotalPrice(fruits) {
//   let totalPrice = '';
//   for (const fruit of fruits) {
//     totalPrice += `Загальна вартість ${fruit.name} ${
//       fruit.price * fruit.quantity
//     }\n`;
//   }
//   return totalPrice;
// }
// console.log(calcTotalPrice(fruits));

//4. Створіть об'єкт calculator з трьомя методами
//read(a, b) - приймає два аргумента і зберігає їх
//як властивості об'єкта
//sum() повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті)
//mult() перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)

// const calculator = {
//   read(a, b) {
//     this.valueA = a;
//     this.valueB = b;
//   },
//   sum() {
//     if (!this.valueA || !this.valueB) {
//       return 'Valus not found';
//     }
//     return this.valueA + this.valueB;
//   },
//   mult() {
//     if (!this.valueA || !this.valueB) {
//       return 'Valus not found';
//     }
//     return this.valueA * this.valueB;
//   },
// };

// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator);

// /5. Напишіть скрипт керування особистим кабінетом інтернет банка
//Є об'єкт account в якому необхідно реалізувати
//методи для работи з балансом та історією транзакцій
//Типів транзакцій всього два.
//Можна покласти або зняти гроші з рахунка
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// //Кожна транзакція це об'єкт з властивостями id, type, amount
// const account = {
//   //поточний баланс рахунка
//   balance: 0,
//   //Історія транзакцій
//   transactions: [],
//   //Метод створює і повертає об'єкт транзакцій
//   //Приймає сумму і тип транзакцій
//   createTransaction(type, amount) {
//     return {
//       type,
//       amount,
//     };
//   },

//   //Метод відповідає за додавання сумми к балансу.
//   //Приймає сумму транзакціи.
//   //Визиває createTransaction для створення об'єкта транзакціи
//   //після чого додає його в історію транзакцій
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
//     transaction.id = Math.random();
//     this.transactions.push(transaction);
//   },
//   //Метод відповідає за зняття сумми з балансу.
//   //Приймає сумму транзакціи.
//   //Визиває createTransaction для створення об'єкта транзакціи
//   //після чого додає йогого в історю транзакцій
//   //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
//   //що недостатньо коштів на рахунку
//   withdraw(amount) {
//     if (amount > this.balance) {
//       return console.log('недостатньо коштів на рахунку');
//     }
//     this.balance -= amount;
//     const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
//     transaction.id = 111;
//     this.transactions.push(transaction);
//   },
//   //Метод повертає поточний баланс
//   getBalance() {
//     return `На вашому рахунку ${this.balance} гривень`;
//   },
//   //Метод шукає і повертає об'єкт транзакціи по id
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return 'транзакція не знайдена';
//   },
//   //Метод повертає кількіств коштів вказаного типу
//   //транзакціи зі всієї історії транзакцій
//   getTransactionType(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };

// account.deposit(2000);
// account.deposit(2100);
// account.deposit(2033);
// account.deposit(202);
// account.withdraw(900);
// account.withdraw(9000);
// console.log(account);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(11));
// console.log(account.getTransactionType(Transaction.DEPOSIT));
