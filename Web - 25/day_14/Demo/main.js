// // 1. Funtion expression
// // Function có thể gán cho biến

// // Regular function
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(10, 20));

// // Amonymous function : Function không có tên (vô danh, ẩn danh)
// const sum1 = function (a, b) {
//     return a + b
// }
// console.log(sum1(3, 4));

// // 2. Higher Order Function (HOF) : Function bậc cao
// // Truyền vào làm tham số cho function khác

// const fillterNumber = function (arr, func) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

// let data1 = fillterNumber([1, 2, 3, 4, 5, 6], function (ele) {
//     return ele % 2 == 1;
// })
// console.log(data1)

// let data2 = fillterNumber([1, 2, 3, 4, 5, 6], function (ele) {
//     return ele % 2 == 0;
// })
// console.log(data2)

// let data3 = fillterNumber([1, 2, 3, 4, 5, 6], function (ele) {
//     return ele > 3;
// })
// console.log(data3)

// // Có thể được trả về từ function khác.
// const sum2 = function (a, b) {
//     return function (c) {
//         return a + b + c;
//     }
// }

// // let func = sum2(10,20);
// // console.log(func);

// // let data = func(30);
// // console.log(data);

// let data = sum2(10, 20)(30);
// console.log(data)

// // Arrow function
// // function sum(a,b) {
// //     return a + b;
// // }

// // const sum3 = (a, b) => {
// //     return a + b
// // }

// const sum3 = (a, b) => a + b;
// console.log(sum(5, 6))


// // ForEach
// // Khai báo mảng các số
// let numbers = [1, 2, 3, 4, 5, 6]

// // In ra các phần tử trong mảng
// for (let i = 1; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// // Value : numbers[i]
// // Index : i
// numbers.forEach(function (value, index) {
//     console.log(value);
// })

// numbers.forEach((value, index) => {
//     console.log(`index : ${index} - value : ${value}`);
// })
// // Tính tổng 
// let total = 0;
// numbers.forEach(value => {
//     total += value;
// })

// console.log(total)

// // Tính các giá trị số lể
// numbers.forEach(value => {
//     if (value % 2 == 0) {
//         return
//     }
//     console.log(value)
// })

// Tùm số lớn nhất
let numbers = [1, 4, 11, 6, 2, 4, 7, 0]
console.log(Math.max(...numbers)) // 11
console.log(Math.max(1, 4, 11, 6, 2, 4, 7, 0))

// Nối mảnh
let a1 = [1,2];
let a2 = [3,4];
let a3 = [...a1, a2];
console.log()