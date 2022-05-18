console.log ("Hello main.js")

// Khai báo biến
let name;
console.log(name);

name = " Nhi Ne"
console.log(name);

// Vừa khai báo biến, vừa tạo giá trị cho biến

let email = "nguyenvannhikt@gmail.com"
let number = 10
let isStatus = true

// Kiểu dữ liệu nguyên thủy(primary type)
// underfined, string, number, boolean,...

// Khai báo hằng số
const PI=3.14
console.log(PI)

// Kiểm tra dữ liệu của 1 biến
console.log(typeof email);
console.log(typeof number);
console.log(typeof isStatus);

// Chuỗi
let message = ' Xin chào các bạn, mình tên là "Nhi". Mình sinh  năm 1999 '
console.log((message))

// Cộng chuỗi 
let fistName = "Nguyễn"
let lastName = "Văn Nhi";
let fullName = fistName + " " + lastName;

// Template string
let address = " Kon Tum"
let age = 23
console.log(`Xin chào các bạn, mình tên là ${fullName}. Mình sinh năm ${2022 - age}, quên quán ở ${address} ` );

// Không sử dụng Template String
console.log("Xin chào các bạn, mình tên là " + fullName + ". Mình sinh năm " + (2022 - age) + ", quên quán ở" + address);

// Hiển thị text theo nhiều dòng
console.log(`
      Dòng 1
      Dòng 2
      Dòng 3
`);

// Math Object
console.log(Math.PI);

