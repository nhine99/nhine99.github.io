// Khai báo kiểu Boolean
let a = true;
let b = false;

console.log(a);
console.log(b);
console.log(!a);
console.log(!b);

// Hàm Boolean
console.log(Boolean(10));
console.log(Boolean(10 > 5));
console.log(Boolean(5 > 10));

// Falsy value
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(false));

// 1 số toán tử : !, || , &&
console.log("Toán tủ điều kiện");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("Toán tủ điều kiện");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Câu lệnh if : Nếu ... Thì ...
console.log("Câu lệnh if");

let hour = 6;
if(hour < 10) {
    console.log("Good morning!");
}

// Ví dụ 2
let troiDep = true;
let coTien = true;
if(troiDep && coTien) {
    console.log("Đi chơi");
}

// Ví dụ 3
let tienMat = false;
let chuyenKhoan = true;
if(tienMat || chuyenKhoan) {
    console.log("Mua được hàng");
}

// If / else
// Ví dụ : Nếu trời đẹp thì đi chơi, ngược lại thì ở nhà
if(troiDep == true) {
    console.log("Đi chơi");
} else {
    console.log("Ở nhà");
}

// Ví dụ 2 : Nếu có 30 triệu trở lên thì mua Iphone 13 pro max, ngược lại thì mua Samsung S21
let money = 20;
if(money >= 30) {
    console.log("Mua Iphone 13 pro max")
} else {
    console.log("Mua Samsung S21")
}

// Câu lệnh if - else/ else - else
// Ví dụ : 
// Nếu có 30 triệu trở lên thì mua Iphone 13 pro max
// Nếu có 20 -> 30 triệu thì mua samsung s21
// Nếu có 15 -> 20 triệu thì mua oppo find X3
// Còn 15 triệu trở xuống thì mua xiaomi pro 9

money = 40;
if(money >= 30) {
    console.log("Mua iphone 13 pro max")
} else if(money >= 20 && money < 30) {
    console.log("Mua samsung S21");
} else if (money >= 15 && money < 20) {
    console.log("Mua oppo Find X3");
} else {
    console,log(" Mua xiaomi pro 9");
}

// If else lồng nhau
// Vi dụ : Kiểm tra 1 số là số nguyên dương, số nguyên âm hay là số 0
// Nếu đó là số nguyên dương thì kiểm tra tiếp là số chẵn hay số lẻ


let number = 10;
if(number > 0) {
    console.log("Số nguyên dương");

    if(number % 2 == 0) {
        console.log("Số chẵn");
    } else {
        console.log("Số lẻ");
    }
} else if (number == 0) {
    console.log("Số 0");
} else {
    console.log("Số nguyên âm");
}

// Toán tử 3 ngôi
// let hour = 6
if(hour < 12) {
    console.log("Good morning")
} 
 





