// Bài 1


let repeatString = "a";

console.log(`${repeatString.repeat(10)}`);

// Bài 2

let repeatString1 = "a-";

console.log(`${repeatString1.repeat(9)}a`);

// Bài 3
function repeatStringNumTimes(string, n) {
    var repeatedString = "" ;
    while (n > 0) {
      repeatedString += string;
      n--;
    }
    return repeatedString;
  }
//   repeatStringNumTimes("a", 5);
  console.log(repeatStringNumTimes("a", 5) )


// Bài 4

var s=0;
for (var i = 0; i <= 100; i++){
    if (i % 5 == 0){
        s += i;
   
    }
}
 console.log(s)

// Bài 5

function Globular( glr_diameter) {
		  
  this.glr_diameter = glr_diameter;
}

Globular.prototype.Volume = function () {
  var radius = this.glr_diameter;
  
  return 4/3 * Math.PI * radius * radius * radius;
};

var glr = new Globular(5);

console.log('Thể tích =' , glr.Volume().toFixed(4));

// Bài 6

let sum=0;
for (let i = 1; i <= 8; i++) {
  if (i >3 && i<8) {
    sum +=i
  }
}
console.log(sum)
 
//Bài 7

function kiem_tra_snt(n) {
    // Biến cờ hiệu
    var flag = true;

    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else {
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i < Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }

    // Kiểm tra biến flag
    if (flag == true) {
        console.log(n + " là số nguyên tố");
    }
    else {
        console.log(n + " không phải là số nguyên tố");
    }
}
kiem_tra_snt(7)

// Bài 9

let integer = 8;
let  n = 0;
for (let i = 0; i <= integer; i++){
    if (integer % i == 0){
      n += i
    }
}
console.log(n)









