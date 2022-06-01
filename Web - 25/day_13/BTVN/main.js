// Bài 1: Tìm số lớn nhất trong mảng

function numbers(arr) {
    return Math.max.apply(Math, arr);
}

console.log(numbers([2, 7, 4, 10, 6]));

// Bài 2: Tìm số nhỏ nhất trong mảng

function numbers1(arr) {
    return Math.min.apply(Math, arr);
}
console.log(numbers1([2, 7, 4, 10, 6]));



// Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

// function numbersArr (arr) {
//     let newArr = [];
//     for ( let i =0; i < arr.length; i++) {
//         if ( arr[i] % 2 == 0 ) {
//             newArr += arr.push(0);
//         } 
        
//     }
// }
// console.log(numbersArr([4,2,5,6,2]))
// const numbers2 = [1, 2, 3,4,5];
// const numbersCopy = [];

// for (i = 0; i < numbers2.length; ++i) {
//   numbersCopy[i] = numbers2[i];
// }
// numbersCopy.push(10);

// console.log(numbers2); // > Array [1, 2, 3]
// console.log(numbersCopy); // > Array [1, 2, 3, 4]



const evens = [2, 4, 6, 8, 10];
let odds = [];
for (let index = 0; index < evens.length; index++) {
odds.push(evens[index]+10);
}
console.log(odds);

// function repeatString(str) {
//     let sum = "";
//     for (let i = 0; i < 10; i++) {
//         sum += `${str}`;
//     }
//     return sum;
//   }
// let str =('aaaaaaaaaa')
// let arr = str.split(' ')
// console.log(arr)

let str=('a')
let arr = str.split(' ')
console.log(arr)
let newarr = [];
for (let index = 0; index < arr.length; index++) {
    newarr.push(arr[index]);
    }
console.log(newarr)
let repeatString = newarr.join('-')   
console.log(repeatString)
