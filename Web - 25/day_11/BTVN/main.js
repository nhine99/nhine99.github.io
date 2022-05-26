// Bài 1


let repeatString = "a";

console.log(`${repeatString.repeat(10)}`);

// Bài 2

function repeatString2(str) {
  let sum = "";
  for (let i = 0; i < 9; i++) {
      sum += `${str}-`;
  }
  sum += str;
  return sum;
}
console.log(repeatString2("a"));

// Bài 3
function repeatString3(str,n) {
  let res = str;
  for (let i = 0; i < n - 1; i++) {
    res += '-' + str;
  }
  return res;
}

console.log(repeatString3('a', 5));

// Bài 4

var s=0;
for (var i = 0; i <= 100; i++){
    if (i % 5 == 0){
        s += i;  
    }
}
 console.log(s)

// Bài 5

function volume(r) {
  let v = (4*Math.PI*r*r*r)/3
  return v;
}
console.log(volume(4))

// Bài 6

function sum(num1, num2) {
  total = 0;
  if (num1 < num2) {
      for (let i = num1 + 1; i < num2; i++) {
          total += i;
      }
  } else {
      for (let i = num2 + 1; i < num1; i++) {
          total += i;
      }
  }
  return total;
}
console.log(sum(3, 8));
console.log(sum(8, 3));
//Bài 7

function isPrime(number) {
  if (number < 2) {
      return false;
  }

  for (let i = 2; i < number; i++) {
      if (number % i === 0) {
          return false;
      }
  }

  return true;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));


// Bài 8 
function tongNT(number) {
  let sum = 0;
  for (let i =2; i <= number; i ++) {
    if(isPrime(i)) {
      sum += i
    }
  }
  return sum
}
console.log(tongNT(8))

// Bài 9

let integer = 8;
let  n = 0;
for (let i = 0; i <= integer; i++){
    if (integer % i == 0){
      n += i
    }
}
console.log(n)









