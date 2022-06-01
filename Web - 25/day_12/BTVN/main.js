// Bài 1

function checkStringExist(string, substring) {
    return string.includes(substring);
}
console.log(checkStringExist("i love you", "you"))
console.log(checkStringExist("i love you", "hate"))


// Bài 2
   // Cách 1
function shortenString(str) {
    let sub;
    if (str.length > 8) {
        return sub = str.substring(0, 8) + "...";
    } else {
        return str;
    }
}
console.log(shortenString("Xin chào các bạn"))
console.log(shortenString("Hello"))

   //

// Bài 3

// let palindrome = str => {
//     str = str.toLowerCase()
//     return str == str.split('').reverse().join('')
// }
// console.log(palindrome("Madam"))
// console.log(palindrome("Hello world"))

function isString(str="") {
    // Format chuỗi ( in thường, loại bỏ khoảng trống) ( replace, replaceAll)
    let str2 = str.toLowerCase().split("").join("");

    // Tìm ra chuỗi đảo ngược
    let str3 ="";
    for ( let i = str2.length -1; i >= 0; i--) {
        str3 += str2[i];
    }
}
 
// Bài 4
function alphabet_order(str) {
    return str.split('').sort().join('');
}
console.log(alphabet_order("53751"));



// Bài 5
function snake_case(str) {
    return str.toLowerCase().split(" ").join("_");
}

console.log(snake_case('HELLO world'));
console.log(snake_case('Xin Chao Cac BAN'));








