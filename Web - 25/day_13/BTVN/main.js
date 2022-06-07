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

function chiaMang(arr) {
    let num = [];

    for (let i = 0; i < arr.length; i++) {
        num.push(arr[i] % 2)
    }
    return num;
}

let num = [4, 2, 5, 6, 2, 7];
console.log(chiaMang(num));

// Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
function repeatString1(str,n){
    let str2 = []
    for (let i = 0; i < n; i++) {
        str2.push(str)
    }
    return str2.join('')
}
console.log(repeatString1('a',10))


// Bài 5
function repeatString(str,n){
    let str2 = []
    for (let i = 0; i < n; i++) {
        str2.push(str)
    }
    return str2.join('-')
}
console.log(repeatString('a',10))



