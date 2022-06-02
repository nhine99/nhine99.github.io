# Một số String methods cần biết trong javascript

**String** là một trong những phần quan trọng nhất trong javascript, ngoài những methods hay dùng như trim, **concat, subString, toUpperCase, toLowerCase**; Javascript còn cung cấp cho chúng ta rất nhiều methods hữu ích khác để thao tác và giải quyết các vấn đề dễ dàng hơn khi làm việc với String. Mặc dù những hàm này ra đời cũng khá lâu hoặc các bạn cũng đã từng sử dụng nhưng đây là một cơ hội để chúng ta ôn lại và hiểu rõ hơn công dụng của mỗi hàm, bắt đầu nào!!!

## **1. includes**
**includes** method dùng để kiểm tra một string có chứa một string khác hay không.

Ví dụ sau đây kiểm tra từ **'world'** có trong chuỗi hay không:

```js
const str = "Hello world, hello javascript.";
console.log(str.includes("world")); /* true */

// kiểm tra từ vị trí thứ 15
console.log(str.includes("world", 15)); /* false */
```
## **2. repeat**

**repeat** method sẽ tạo ra một string mới lặp lại một số lần xác định của string ban đầu.

Ví dụ sau đây tạo một string mới với 5 lần lặp lại string ban đầu:

```js
const str = "Hello viblo";
console.log(str.repeat(5));
```

## **3. match**

**match** method sẽ thực hiện tìm kiếm một string match với regular expression truyền vào, và trả về một array các string vừa tìm kiếm được; nếu không tìm thấy thì trả về **null**.

```js
const str = "The rain in SPAIN stays mainly in the plain";
console.log(str.match(/ain/g)); /* ["ain", "ain", "ain"] */
console.log(str.match(/ain/gi)); /* ["ain", "AIN", "ain", "ain"] */
console.log(str.match(/ainnn/g)); /* null */

const str2 = "Will 2021 be better than 2020?";
console.log(str2.match(/[0-9]/g)); /* ["2", "0", "2", "1", "2", "0", "2", "0"] */
```

## **4. charAt**

**charAt** method sẽ trả về một ký tự trong string tại vị trí index xác định

Ví dụ sau:

```js
const str = "HELLO WORLD";
console.log(str.charAt(6)); /* W */
```

## **5. indexOf**

**indexOf** method sẽ trả về vị trí index đầu tiên của một chuỗi ký tự trong string ban đầu, nếu không tìm thấy thì trả về **-1**

Ví dụ sau:

```js 
const str = "Hello Javascript!";
console.log(str.indexOf("Javascript")); /* 6 */
console.log(str.indexOf("Javascripttt")); /* -1 */
```

## **6. replace**

**replace** method sẽ trả về một string mới với các giá trị đã được thay thế của string ban đầu.

Ví dụ sau:

```js
const str = "Hello world. Hello javascript";
// Chỉ thay thế từ đầu tiên
console.log(str.replace("Hello", "Hi")); /* Hi world. Hello javascript */

// Thay thế tất cả bằng cách sử dụng regex
console.log(str.replace(/Hello/g, "Hi")); /* Hi world. Hi javascript */
```

## **7. padStart, padEnd**

**padStart** add thêm một số ký tự phía trước string ban đầu với một độ dài xác định.

**padEnd** add thêm một số ký tự phía sau string ban đầu với một độ dài xác định.

Ví dụ sau:

```js
// Add thêm ký tự "0" vào phía trước eightBits cho đến khi có độ dài = 8
const eightBits = "001".padStart(8, "0");
console.log(eightBits); // 00000001

// Add thêm ký tự "*" vào phía sau anonymizedCode cho đến khi có độ dài = 5
const anonymizedCode = "34".padEnd(5, "*");
console.log(anonymizedCode); // 34***
```

## **8. Convert string to array**

Có nhiều cách để convert string sang array các ký tự, nhưng mình thích sử dụng toán tử spread operator hơn.

Ví dụ sau:

```js
onst word = "apple";
const characters = [...word];
console.log(characters); // ["a", "p", "p", "l", "e"]
```

## **9. Convert number to string**

```js
const val = 1 + "";
console.log(val); // Result: "1"
console.log(typeof val); // Result: "string"
```

## **10. Convert string to number**

```js
const val = + "1";
console.log(val); // Result: 1
console.log(typeof val); // Result: "number"
```


# Một số Array methods cần biết trong javascript

**Array(mảng)** là một cấu trúc dữ liệu rất quen thuộc và được sử dụng thường xuyên. Javascript đã cung cấp cho chúng ta các method để giúp xử lý dữ liệu trong mảng dễ dàng hơn, hãy cùng tìm hiểu về chúng qua bài viết này nhé.
## **1. push(), pop(), shift(), unshift()**

Đây đều là các method giúp thêm hoặc xóa phần tử của mảng, tác dụng của từng method như sau:

- **push()**: Thêm phần tử vào cuối mảng.

- **unshift()**: Thêm phần tử vào đầu mảng.

- **pop()**: Xóa phần tử cuối cùng trong mảng.

- **shift()**: Xóa phần tử đầu tiên trong mảng.

Ví dụ: 
```js
let arr = [];

arr.push(1); // arr = [1]
arr.unshift(2); // arr = [2,1]
arr.pop(); // arr = [1]
arr.shift(); // arr = []
```

## **2. every()**

Method này sẽ có tham số là 1 hàm (ta tạm gọi là **testMethod**). hàm testMethod sẽ có cấu trúc như sau **function(el, index, arr)** và luôn trả về giá trị **true/false**. 

- el**: giá trị của phần tử hiện tại.
- **index**: vị trí của phần tử hiện tại trong mảng.
- **arr**: mảng chứa phần tử hiện tại.

**Method every()** sẽ kiểm tra xem toàn bộ phần tử trong mảng có thỏa mãn testMethod không.

Ví dụ:

```js
const arr = [2,4,6,8,10];
arr.every(el => el % 2 == 0); // true

const arr = [2,1,6,8,10];
arr.every(el => el % 2 == 0); // false
```
testMethod ở đây chính là hàm kiểm tra xem phần tử có phải số chẵn hay không. Vậy thì ví dụ 1 là true vì toàn bộ mảng là số chẵn, còn ví dụ 2 là **false** vì có phần tử 1 là số lẻ.

## **3. some()** 

Tương tự, method này cũng nhận vào một tham số là testMethod. Method này sẽ trả về **true** nếu như **có ít nhất 1 phần tử** trong mảng thỏa mãn testMethod, nếu không sẽ trả về **false**.

Ví dụ:

```js
const arr = [1, 3, 5, 7, 2];
arr.some(el => el % 2 == 0); // true

const arr = [1, 3, 5, 7, 9];
arr.some(el => el % 2 == 0); // false
```
Ví dụ 1 có phần tử 2 thỏa mãn, còn ở ví dụ 2 thì không có phần tử nào cả.

## **4. map()**

Method này sẽ nhận vào tham số là 1 testMethod, tuy nhiên testMethod này không nhất thiết phải trả về giá trị **true/false**. Method này sẽ trả về một mảng mới, với giá trị được trả về từ testMethod của từng phần tử.

Ví dụ, ta muốn bình phương tất cả phần tử trong mảng:

```js
const arr = [1, 3, 5, 7, 2];
arr.map(el => el*el); // [1, 9, 25, 49, 4]
```

## **5. find()**

Method này cũng nhận vào tham số là 1 testMethod và trả về phần tử đầu tiên thỏa mãn testMethod, nếu không có phần tử nào thì sẽ trả về undefined

Ví dụ:
```js
const arr = [1, 3, 5, 2, 4, 8, 9];
arr.find(el => el % 2 == 0); // 2

const arr = [1, 3, 5, 9];
arr.find(el => el % 2 == 0); // undefined
```
Ở ví dụ 1, ta có phần tử 2 là số chẵn đầu tiên trong mảng. Còn ở ví dụ 2 thì không có số chẵn nào cả.

## **6. reduce()**

Đây là method dùng để tính toán từ các phần tử của mảng (theo thứ tự từ trái sang phải).

Method này sẽ nhận vào 2 tham số:
- **function(total, el)**: Là một hàm tính toán, **total** chính là kết quả phép tính của phần tử trước còn **el** chính là phần tử hiện tại.
- **initVaule** : Giá trị ban đầu của phép tính, được sử dụng làm **total** cho phép tính của phần tử đầu tiên.

Ví dụ, ta có thể tính tổng toàn bộ phần tử trong mảng bằng cách sau:

```js
const arr = [1, 3, 5, 9];
arr.reduce((total, el) => total + el, 0); // 18
```

## **7. splice()**

Method này sử dụng để xóa các phần tử trong mảng và sẽ trả về các phần tử đã xóa. Method này nhận vào hai tham số:

- **index**: vị trí của phần tử đầu tiên muốn xóa.
- **deleteCount**: số phần tử muốn xóa từ vị trí index.

```js
const arr = [1, 3, 5, 9];
const remove = arr.splice(0, 2);
// arr = [5, 9]
// remove = [1, 3]
```
Ta đã xóa 2 phần tử từ vị trí 0 của mảng arr.

## **8. slice()**

Method này tương tự với hàm substring() chỉ khác là sử dụng với mảng. Method này nhận 2 tham số:

- **start**: vị trí của phần tử đầu tiên.
- **end**: vị trí của phần tử cuối cùng, nếu bạn không truyền vào thì mặc định sẽ là độ lớn của mảng.

Method này sẽ trả về mảng con từ vị trí start đến vị trí end - 1 của mảng. Ví dụ:

```js
const arr = [1, 3, 5, 9];
const subArray = arr.slice(0, 2); // [1, 3]
```

## **9. filter()**

Method này nhận vào tham số là một testMethod và sẽ trả về mảng chứa các giá trị thỏa mãn testMethod.

Ví dụ:

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const filter = arr.filter(el => el % 2 == 0); // [2, 4 ,6 ,8]
```

## **10. includes()**

Method này nhận vào 1 tham số là **el** và sẽ trả về **true** nếu mảng có chứa phần tử el, ngược lại sẽ trả về **false**.

Ví dụ:
```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8]
arr.includes(1) // true

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
arr.includes(10) // false
``` 


























