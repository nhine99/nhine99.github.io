//  Bài tập Javascript phần Function và Condition

// Bài 1

function divisible(a) {
    if(a%3 == 0 && a%5 == 0){
        console.log("FizzBuzz")
    }
    else if(a%3 == 0) {
        console.log("Fizz")
    }
    else if(a%5 == 0 ) {
        console.log("Buzz")
    } else{
        
    }

}
divisible(30)

// Bài 2


function equation(a, b) {
    if (a == 0 && b == 0) {
      console.log("Phương trình có vô số nghiệm");
    } else if (a != 0 && b == 0) {
      console.log("Phương trình có nghiệm x = 0");
    } else if (a == 0 && b != 0) {
      console.log("Phương trình vô nghiệm");
    } else {
      console.log("Phương trình có nghiệm là x = " + -b / a);
    }
  }
equation(1,1)

// Bài 3

function equation1(a,b,c){
    if( a==0 ) {
        if( b==0 ) {
            if( c == 0) {
                console.log("Phương trình vô số nghiệm")
            }
            else {
                console.log("phương trình vô nghiệm")
            }
        }
        else {
            console.log(`Phương trình có nghiệm là : x = ${-c/b}`  )
        }
    }
    else {
        let d = b*b - 4*a*c
        if( d<0 ) {
            console.log("Phương trình vô nghiệm")
        }
        else if( d==0 ) {
            console.log(`Phương trình có nghiệm là x = ${-b/(2*a)}`)
        }
        else {
            console.log(`Phương trình có 2 nghiệm là: x1 = ${(-b - Math.sqrt(d)) / (2*a)} và x2= ${(-b + Math.sqrt(d)) / (2*a)}`)
        }
    }
}

equation1(4,2,-2)

// Bài 4

function year(year){
    if( year%4 == 0 ){
        if( year%100 == 0) {
            if( year%400 == 0) {
                console.log("Là năm nhuận")
            }
            else {
                console.log("Không là năm nhuận")
            }
        } else {
            console.log("Là năm nhuận")
        }

    } else {
        console.log("Không là năm nhuận")
    }
}

year(2400)

// Bài 5

function bmi(weight,height) {
    let bmi = weight/(height*height)
    return console.log(bmi)
}

bmi(50,100)

// Bài 6
function fahrenheit(c) {
    let f = (1.8*c) + 32
    return console.log(f)
}

fahrenheit(30)



