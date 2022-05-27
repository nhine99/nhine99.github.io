// Bài 1

function checkStringExist(string, substring) {
    return string.includes(substring);
}
console.log(checkStringExist("i love you", "you"))
console.log(checkStringExist("i love you", "hate"))


// Bài 2

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

// Bài 3

let palindrome = str => {
    // chuyển qua lowercase trước
    str = str.toLowerCase()
    // chuyển thành array, reverse rồi so sánh
    return str == str.split('').reverse().join('')
}
console.log(palindrome("Race car"))
console.log(palindrome("Rac car"))

// Bài 4
function alphabet_order(str) {
    return str.split('').sort().join('');
}
console.log(alphabet_order("53751"));



// Bài 5
let toSnakeCase = str =>
    str &&
    str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_');

console.log(toSnakeCase('HELLO world'));
console.log(toSnakeCase('Xin Chao Cac BAN'));




