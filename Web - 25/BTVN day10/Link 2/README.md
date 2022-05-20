# Function
**Function là gì?**

Function (hàm) là tập hợp các đoạn code dùng để thực hiện một tác vụ cụ thể nào đó.

Cú pháp định nghĩa function

```JS
function functionName(para_1, ..., para_n) {
 // code thực thi function
}
```
Thực thi function

```JS
functionName(para_1, ..., para_n)
```
**Phân biệt tham số (parameter) và đối số (argument)**
- **Tham số (parameter)** là biến trong khai báo hàm.
- **Đối số (argument)** là giá trị thực của biến này được truyền vào hàm.
Link tham khảo : https://stackoverflow.com/questions/156767/whats-the-difference-between-an-argument-and-a-parameter

![Ảnh mô tả](./image.png)

# Các loại function thường gặp
**Một số loại function**

Function có các loại sau
- Function có tham số, hoặc không có tham số
- Function có giá trị trả về hoặc không

**1. Function không có tham số**
```JS
function sayHello() {
    console.log("Xin chào các bạn");
}

sayHello();
```

**2. Function có tham số**

Với function kiểu này có thể có một hoặc nhiều tham số (không nên quá 3 tham số)

```JS
// Ví dụ function có 1 tham số
function sayHello(name) {
    console.log(`Xin chào ${name}`);
}
sayHello("Bùi Hiên");

// Ví dụ function có 2 tham số
function sayHello_1(name, city) {
    console.log(`Tôi tên là ${name}, quê tôi ở ${city}`);
}
sayHello_1("Văn Nhi", "Kon Tum");
```
**3. Function trả về kết quả**

Để trả về kết quả, sử dụng từ khóa **return**

```JS
function sum(a, b) {
    return a + b;
}

let data = sum(3, 4);
console.log(data);

// Nếu muốn kiểm tra nhanh kết quả của function có thể sử dụng luôn console.log
console.log(sum(4, 5));
```
> **Chú ý** : Những câu lệnh **đằng sau** từ khóa **return** sẽ **không** được thực thi

Ví dụ:

```JS
function sum(a, b) {
    return a + b;
    console.log(a); // không được thực thi
    console.log(b); // không được thực thi
}
```

**4. Function không trả về kết quả**

Đối với function không có từ khóa **return** thì coi như function đó không trả về kết quả

# Default Parameter ES6

Cho phép khởi tạo function với những default value nếu như chúng được định nghĩa sai.

Khi sử dụng chức năng này sẽ giúp function dễ control và ít error hơn.

Ví dụ:

```JS
function sayHello(name = "Lan Hương") {
    console.log(`Xin chào ${name}`);
}

sayHello(); // Lan Hương
sayHello("Văn Nhi"); // Văn Nhi
```

# Phạm vi của biến (scope)

**Scope** có thể hiểu nôm na là “phạm vi sử dụng của biến”

Có 3 loại scope:
- Global scope
- Function scope
- Block scope

**Global scope**

Một biến được coi là global scope (toàn cục) nếu biến đó được định nghĩa bên ngoài function

```JS
function hello() {
    let name = "Văn Nhi";
    console.log(name);
}

hello(); // Văn Nhi
console.log(name) // Lỗi
```

**Block scope**

Một biến được coi là block scope nếu biến đó được định nghĩa bên trong cặp dấu {}

```JS
{
    let name = "Bùi Hiên";
    console.log(name); // Bùi Hiên
}

console.log(name) // Lỗi
```
**Chú ý**

Nếu 1 biến không có từ khóa khai báo biến, sẽ trở thành biền global

```JS
function sayHello() {
    number = 10;
    console.log(number);
}

sayHello() // 10

console.log(number); // 10
```

# Kiểu dữ liệu Boolean

**Kiểu dữ liệu Boolean**

Giá trị của kiểu dữ liệu này chỉ có thể là **true** hoặc **false**

Ví dụ

```JS
let a = true;
let b = false;
let c = !a;
let d = !b;
```

**Xác định giá trị Boolean**

```JS
let a = 5;
console.log(Boolean(a));

let b = 6;
let c = 10;
console.log(Boolean(b < c));
```
# Truthy & Falsy value

**Truthy value** là những giá trị mà khi ép kiểu về Boolean thì sẽ cho ra giá trị là **true**.

Ngược lại, **Falsy value** là những giá trị mà khi ép kiểu về Boolean thì cho ra giá trị là **false**

Note:
- Có **6 giá trị** sau được coi là **falsy** : **false, 0, NaN, ‘’, null, undefined**
- Các giá trị còn lại, ngoài các giá trị trên được gọi là **truthy**

```JS
console.log(Boolean(false)); // false

console.log(Boolean(0)); // false

console.log(Boolean(NaN)); // false

console.log(Boolean("")); // false

console.log(Boolean(null)); // false

console.log(Boolean(undefined)); // false
```

# Câu lệnh điều kiện if - else if - else

**Câu lệnh if**

Thực hiện câu lệnh trong if nếu điều kiện cho trước là đúng.

```JS
// Cú pháp
if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
}

// Ví dụ
let hour = 6;
if (hour < 10) {
    console.log("Good morning!");
}
```

**Câu lệnh if - else**

Nếu **điều kiện đúng** thực hiện câu lệnh trong **if**, ngược lại nếu **điều kiện sai** thì hiện câu lệnh trong **else**.

```JS
// Cú pháp
if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
} else {
    // Code được thực thi nếu điều kiện sai
}

// Ví dụ
let hour = 6;
if (hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}
```

**Câu lệnh if - else if - else**

Chỉ định một điều kiện mới nếu điều kiện đầu tiên là sai

```JS
// Cú pháp
if (điều kiện 1) {
    // Code được thực thi nếu điều kiện 1 đúng
} else if (điều kiện 2) {
    // Code được thực thi nếu điều kiện 1 sai và điều kiện 2 đúng
} else {
    // Code được thực thi nếu điều kiện 1 và 2 sai
}

// Ví dụ
let hour = 6;
if (hour < 12) {
    console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
```

# Sự khác biệt giữa == và ===

== và === đều được sử dụng để so sánh

Tuy nhiên cần chú ý điểm sau khi sử dụng để thực hiện so sánh
- Toán tử == so sánh trừu tượng (abstract equality), tức là nó thực hiện các chuyển đổi loại cần thiết trước khi so sánh (so sánh về mặt giá trị)
- Còn toán tử === so sánh nghiêm ngặt (strict equality), nghĩa là nó sẽ không thực hiện chuyển đổi loại. Do đó nếu hai giá trị không cùng loại, thì khi so sánh, kết quả sẽ trả về false (so sánh về mặt giá trị và kiểu dữ liệu)

Ví dụ:

```JS
let a = 2;
let b = "2";

// Sử dụng toán tử ==
console.log(a == b) // true
// Đúng vì b khi thực hiện so sánh sẽ được convert sang dang số (2) 2 == 2 --> true

// Sử dụng toán tử ===
console.log(a === b) // false
// Sai vì kiểu dữ liệu của a là number và của b là string
```

# Toán tử 3 ngôi

**Câu lệnh if**

Thực hiện câu lệnh trong if nếu điều kiện cho trước là đúng.

```JS
// Cú pháp
if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
}

// Ví dụ
let hour = 6;
if (hour < 10) {
    console.log("Good morning!");
}
```

**Câu lệnh if - else**

Nếu **điều kiện đúng** thực hiện câu lệnh trong **if**, ngược lại nếu **điều kiện sai** thì hiện câu lệnh trong **else**.

```JS
// Cú pháp
if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
} else {
    // Code được thực thi nếu điều kiện sai
}

// Ví dụ
let hour = 6;
if (hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}
```

**Câu lệnh if - else if - else**

Chỉ định một điều kiện mới nếu điều kiện đầu tiên là sai

```JS
// Cú pháp
if (điều kiện 1) {
    // Code được thực thi nếu điều kiện 1 đúng
} else if (điều kiện 2) {
    // Code được thực thi nếu điều kiện 1 sai và điều kiện 2 đúng
} else {
    // Code được thực thi nếu điều kiện 1 và 2 sai
}

// Ví dụ
let hour = 6;
if (hour < 12) {
    console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
```



























