/*
Khái niệm Api là gì?
Appication Progaming Interface (Giao diện lập trình ứng dụng)
Tập hợp các quy tắc mà qua đó cho phép các thành phần. hoặc các ứng dụng kết nối tương tác như thế nào

Ví dụ thực tế
Đi ăn nhà hàng
Khách hàng: client (fontend)
Nhà bếp: server (backend)
Khách hàng --> gọi món --> nhà bếp
Nhà bếp --> Chế biến món ăn --> khách hàng
Nhân viên: Lấy thực đơn từ khách hàng --> gọi cho nhà bếp
Nhà bếp nấu ăn xong --> Nhân viên bưng món ăn lên cho khách hàng

Cấu trúc như thế nào
API = http method + URL

HTTP method
Get: Lấy thông tin : Lấy thông tin từ menu 
POST: Tạo : Đặt món
PUT: Cập nhật : Thay đổi món ăn
DELETE: Xóa : Hủy món ăn

URL(danh từ - resouce) users
GET /users --> Lấy danh sách tất cả user
GET /users --> Lấy thông tin user có id = 1
GET /users/1/blogs --> Lấy danh sách tất cả blog của user có id = 1
GET /users/1/blogs/2 --> Lấy thông tin blogs có id = 2 của user có i = 1

POST /users --> Tạo user mới
{
    name : 
    email :
    ...
}

POST /users/1/blogs --> Tạo blogs mới cho user có id = 1
{
    title :
    email :
    ...
} 

PUT /users/1 --> Cập nhật thông tin cho user có id = 1


4.Thực hiện gọi API 
- axios ( thư viện bên thứ 3 , cần phải nối link vào để thực hiện) (khuyên dùng)
- fetch API (có sẵn của javascrip)
- AJAX (có trong jquery,cũng cần nối link để sử dụng)

5. Test API như thế nào
- Postman
- Extension VSCode : RESR Client
- Test trực tiếp trên browser
*/

let btnEle = document.querySelector('#btn')
let imgEle = document.querySelector('#img')

btnEle.addEventListener('click',async () =>{
    try{
        let res = await axios.get('https://dog.ceo/api/breeds/image/random')
        imgEle.src = res.data.message
    } catch(error){
        console.log(error)
    }
})

// Gọi API sử dụng AJAX trong jquery
$(".btn-jquery").click(function() {
    $.jax({
        type: "GET",
        url: "https://dog.ceo/api/breeds/image/random",
        success: function (response) {
            console.log(response);

            $("#image").altr("src", response.message)
        },
        error: function (error) {
            console.log(error)
        }
    });
})

// Gọi API sử dụng fetch API
const btnFetch = document.getElementById("btn-fetch");
btnFetch.addEventListener("click", async () => {
    try {
        let res = await fetch("https://dog.ceo/api/breeds/image/random");
        let data = await res.json();

        imgEle.src = data.message
    } catch (error) {
        console.log(error)
    }
})