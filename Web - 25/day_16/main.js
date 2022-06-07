// Bài 1 Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.
function max2Numbers(arr) {
    return newArr = arr.sort((a, b) => a - b).slice(-2, -1).join('');
    // B1 Sắp xếp array tăng dần 
    // B2 Chọn phần tử thứ 2 từ cuối mảng trở về
    // B3 Chuyển thành chuỗi 
}
console.log(max2Numbers([2, 1, 3, 4]))

// Bài 2 Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
function getStringHasMaxLength(arr) {
    arr.sort((a, b) => {
        return b.length - a.length
    })
    let newArr = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        if (arr[0].length == arr[i].length) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']))
// B1 Sắp xếp mảng theo thứ tự giảm dần
// B2 Gán newArr bằng phần tử đầu tiên trong mảng
// B3 Sử dụng vòng lặp qua mảng arr. Nếu arr[0].length = arr[i].length thì thêm giá trị đó vào mảng newArr
// B4 Ra khỏi vòng lặp và trả về kết quả của newArr

// Bài 3 Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(getRandomElement([3, 7, 9, 11]));
console.log(getRandomElement([3, 7, 9, 11]));



// Bài 4 Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó
function similarity(arr1, arr2) {
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            arr.push(arr1[i]);
        }
    }
    return arr;
}
console.log(similarity([1, 2, 3], [1, 2, 4]));
console.log(similarity([1, 2, 3], [3, 4, 5]));
// B1  Gán arr = []
// B2  Sử dụng vòng lặp qua mảng arr. Nếu giá trị nào của arr2 nằm trong arr1 thì thêm giá trị đó vào mảng arr
// B3  Ra khỏi vòng lặp để trả về kết quả của arr.

// Bài 5  Viết function truyền vào 2 tham số:

// Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
// Tham số 2: Là 1 số x <= 1000
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.

const timeAdd = 7;
const sourceTime = "9:20:56"; //hh:mm:ss
const [hours, minutes, seconds] = sourceTime.split(':');
const totalSeconds = (+hours) * 60 * 60 + (+minutes) * 60 + (+seconds);
const changeSecond = timeAdd + totalSeconds;
const newTimes  = new Date(changeSecond * 1000).toISOString().slice(11, 19)
console.log(newTimes) 
// B1 Tách giờ phút giây
// B2 Chuyển đổi tất cả thành giây, dấu + giúp convert thành số dương
// B3 Chuyển đổi số giây về lại định dạng hh:mm:ss

// Bài 6 : 
users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true

const ageLonHon25 = (arr, age) => {
    let newArr = [];
    arr.forEach(user => {
        if (user.age > age && user.isStatus == true) {
            newArr.push(user);
        }

    })
    return newArr
}
console.log(ageLonHon25(users, "25"));

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần

// B1 Lấy lần lượt các chuỗi trong mảng ban đầu, sau đó gán vào hai biến a và b
// B2 Dùng hàm callback để nhận hai giá trị này, sau đó so sánh a, b và trả về -1, 0 hoặc 1 trong các trường hợp
// B3 So sánh kết quả của callback với chuỗi 0, và áp dụng 3 quy tắc ở trên để xếp vị trí cho a và b.
// B4 Tiến hành sắp xếp cho tới khi lấy hết phần tử trong mảng.

let ageTangDan = users.sort(function (a, b) {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0;
})
console.log(ageTangDan);

// Bài 7 : Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần







