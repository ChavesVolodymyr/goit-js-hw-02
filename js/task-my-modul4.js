// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = ["Spacious apartment in the city center", 4, 2153];
// const keys = Object.keys(apartment);
// for (let key of keys) {
  
// }
// console.log(key);


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


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = [];

// for (let key of keys) {
//   values.push(apartment[key]);
// }

// console.log(keys); // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153]


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);

// console.log(rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
    
//     for (const product of products) {
//     if (product.name === productName) {
//         return product.price;
//     }
// } return null;

// }

// console.log(getProductPrice("Radar")); // Повертає 1300
// console.log(getProductPrice("Grip")); // Повертає 1200
// console.log(getProductPrice("Scanner")); // Повертає 2700
// console.log(getProductPrice("Droid")); // Повертає 400
// console.log(getProductPrice("Engine")); // Повертає null

// !!! it's HARD
// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
    
//     const result = [];
//     for (const product of products) {
//         if (Object.keys(product).includes(propName)) {
//             result.push(product[propName]);
//         }
//     } return result;
// }


// console.log(getAllPropValues("name")); // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
// console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); // []
// !!!!!!

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     for (const product of products) {
//         if (product.name === productName) {
//           return product.price * product.quantity
//         }
//     }  return `Product ${productName} not found!`
// }

// console.log(calculateTotalPrice("Blaster")); // "Product Blaster not found!"
// console.log(calculateTotalPrice("Radar")); // 5200
// console.log(calculateTotalPrice("Droid")); // 2800
// console.log(calculateTotalPrice("Grip")); // 10800
// console.log(calculateTotalPrice("Scanner")); // 8100

