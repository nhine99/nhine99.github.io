// Định nghĩa function
function sayHello() {
    console.log("Xin chào...")
}

sayHello();

function sayHelloWithName(name) {
    console.log(`Xin chào ${name}`)  
}

sayHelloWithName("Nguyễn Văn A");
sayHelloWithName("Trần A");
sayHelloWithName("Ngô B");

function showInfo(name, year) {
    console.log(`Xin chào, tôi tên là ${name}, năm nay tôi ${2022 - year} tuổi.`);
}

showInfo("Nhi",1999);
showInfo("Việt",1995);  

// Function có trả về kết quả
// Ví dụ : Tính tổng 2 số a, b
function sum(a, b) {
    let result = a + b;
    console.log(a);
    console.log(b);
    return result;
}

let data = sum(3, 4);
console.log(data); //7

console.log(sum(10, 20)); // 30
console.log(sum(data, 10)); //7

// Default Parameter
function sum1(a = 10, b = 20) {
    let result = a + b;
    return result;
}

console.log(sum1(3)); // 23
console.log(sum1()); // 30
console.log(sum1(5, 6)); // 11

// Bài Tập
function sayHello() {
    console.log("Xin chào các bạn")
}
sayHello();

function sayHelloWithName(name) {
    console.log(`Xin chào ${name}`)
}

sayHelloWithName("Nhi");

function sayHelloWithName1(name) {
    console.log(`Xin chào "${name}"`)
}

sayHelloWithName1("Nhi");

function sum3(a, b) {
    let result = a + b;
    console.log(a);
    console.log(b);
    return result;
}

let data2 = sum3(50, 100);
console.log(data2);

function sum4(a) {
    let result = a*a;
    console.log(a)
    return result;
}

let data3 = sum4(4);
console.log(data3);

