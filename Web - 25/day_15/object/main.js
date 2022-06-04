// Khai báo object

let emtyObj = {};

// Khai báo object có giá trị
// property : Đặc điểm, tính chất của đối tượng
// method : Hành vi, hành động
let student = {
    id : 1,
    name : "Nguyễn Văn A",
    email : "a@gmail.com",
    status : false,
    address : {
        city : "Hà Nội",
        district : "Thanh Xuân"
    },
    // goToSchool() {
    //     console.log("Đi học");
    // }
    goToSchool : function(){
        console.log("Đi học");
    },
    showInfo : function() {
        console.log(`Name : ${student.name}, email : ${student.email}, point : ${student.point}`)
    }
}

// Lấy ra thông tin
console.log(student.email);
console.log(student["email"]);
console.log(student.name);
console.log(student.address.city);

// Set lại thông tin
student.email = "nguyena@gmail.com";
student.address.district = "Đống Đa";

console.log(student);

// Thêm thuộc tính
student.point = 9;

console.log(student);

// Xóa thuộc tính
delete student.status;
console.log(student)

// Gọi phương thức
student.goToSchool();
student.showInfo();

// Phương thức
// 1. Lấy danh sách key
console.log(Object.keys(student));

// Duyệt keys để in ra value tương ứng
let keys = Object.keys(student)
keys.forEach(key => {
    console.log(student[key]);
}) 

// 2. Lấy danh sách value => Trả về mảng
console.log(Object.values(student));

// 3 Kiểm tra 1 key có tồn tại trong object hay không => true/false
console.log(student.hasOwnProperty("name"));
console.log(student.hasOwnProperty("age"));


