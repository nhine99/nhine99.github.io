// Bài tập thực hành 

// Bài 1
function  calculateFactorial(n) {
    let s = 1;
    for ( let i = 1; i <= n; i++) {
        s = s*i;
    }
    return s
}
console.log(calculateFactorial(10))

// Bài 2

function reverse(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i]
    }
    console.log(reversed)
  }
  
  reverse("Hello") 

// Bài 3

    let translate = "JP";
    switch (translate) {
        case "VN": {
            console.log("Xin chào");
            break;
        }
        case "EN": {
            console.log("Hello");
            break;
        }
        case "JP": {
            console.log("Kon'nichiwa");
            break;
        }
        case "CN": {
            console.log("Nǐ hǎo");
            break;
        }
        default: {
            console.log("Không có message phù hợp");
            break;
        }
    }



// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.

// Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…”



let string = "xinchaocacbandenvoiTechmaster";
          console.log( string.substring(0,10) + "...");


// Bài tập thực hành vòng lặp chồng nhau

// Bài 1

function printRectangle(row, col) {
    let content = "";
    for (let i=0; i<row; i++) {
        content += "* "
    }
    content += "<br>"
    document.write(`<pre>${content}</pre>`)
}
printRectangle(5,4)

