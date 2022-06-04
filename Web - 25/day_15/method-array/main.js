// Map

function modulo2(array) {
    let num = [];

    for (let i=0;i<array.length;i++) {

    }
}

// Viết hàm cho phép truyền vào 1 mảng các số
// kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
// Vd : modulo2([4,2,5,6,2,7]) => [0,0,1,0,0,1]

function modulo2(arr) {
    // const result = arr.map(e => e % 2)
    // return result

    return arr.map((e) => e % 2);
}

console.log(modulo2([4, 2, 5, 6, 2, 7]));

// Filter 

// Ví dụ : Tìm các số lẻ trong mảng
// Cách truyền thống
function oddNumbersNotFilter(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(oddNumbersNotFilter([4, 2, 5, 6, 2, 7]));

// Sử dụng filter
// filter = for + if
function oddNumbers(arr) {
    // const result = arr.filter(e => e % 2 == 1)
    // return result

    return arr.filter((e) => e % 2 == 1);
}

console.log(oddNumbers([4, 2, 5, 6, 2, 7]));

// Reduce 

// Ví dụ: Tính tổng các giá trị của mảng

// Không sử dụng reduce
function sum(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// Sử dụng reduce
function sum(arr) {
    let sum = arr.reduce(function (total, elem) {
        return total * elem;
    }, 1);

    return sum
}
console.log(sum([1,2,3,4]))

function sum1(arr) {
    let sum = arr.reduce(function (total, elem) {
        return total + elem;
    }, 0);

    return sum
}
console.log(sum1([1,2,3,4]))

// Find

// Ví dụ: Tìm giá trị của phần tử đầu tiên lớn hơn 5

function getNumberGreater5(arr) {
    return arr.find((e) => e > 5);
}

console.log(getNumberGreater5([1, 2, 3, 4, 5, 6, 7]));

// FindIndex

// Ví dụ: Tìm chỉ số của phần tử đầu tiên lớn hơn 5

function getIndexOfNumberGreater5(arr) {
    return arr.findIndex((e) => e > 5);
}

console.log(getIndexOfNumberGreater5([1, 2, 3, 4, 5, 6, 7]));

// Some

// Kiểm tra xem có giá trị nào trong mảng có lớn hơn 1 không?

function getNumberGreater1(arr) {
    return arr.some((e) => e > 1);
}

console.log(getNumberGreater1([1, -2, -3, -4])); // false
console.log(getNumberGreater1([1, 2, -3, -4])); // true

// Every

// Kiểm tra xem tất cả giá trị trong mảng có lớn hơn 10 không?

function getNumberGreater10(arr) {
    return arr.every((e) => e > 10);
}
console.log(getNumberGreater10([11, 12, 13, 14])); // true
console.log(getNumberGreater10([11, 12, 13, 5])); // false

