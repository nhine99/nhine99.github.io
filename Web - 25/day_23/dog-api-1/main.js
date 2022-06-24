// Khái niệm API là gì ?
// Appication Programing Interface ( giao diện lập trình ứng dụng )
// Tập hợp các quy tắc mà qua đó cho phép các thành phần, hoặc ứng dụng tương tác như thế nào

// Ví dụ thực tế
// Đi ăn nhà hàng
// Khách hàng : client ( front end)
// Nhà bếp : server ( back end )
// Khách hàng --> gọi món --> nhà bếp
// Nhà bếp --> nấu món ăn --> khách hàng --> gửi cho nhà bếp
// Nhà bếp nấu ăn xong --> nhân viên tự bưng món ăn lên khách hàng


// Cấu trúc như thế nào
// API = http method + URL

// Html method
// GET : lấy thông tin : Lấy thông tin từ menu
// POST : Tạo : Đặt món
// PUT : Cập nhật : thay đổi món ăn
// DELETE : Xóa : Hủy món ăn

// URL(danh từ - resouce) users 
// GET /users --> Lấy danh sách tất cả user
// GET /users/1 --> Lấy thông tin của user có id là 1
// GET /users/1/blogs --> Lấy anh sách tất cả blogs user có id là 1
// GET /users/1/blogs/2 --> Lấy thông tin blogs có id = 2 của user có id = 1

// POST /users --> Tạo user mới
// {
//     name :
//     email :
//     ...
// }

// POST /users/1/blogs --> Tạo blogs mới cho user có id = 1
// {
//     title :
//     content :
//     ...
// }

// PUT /users/1 --> Cập nhật thoongtin cho user có id = 1
// {
//     name :
//     email :
//     ...
// }

// DELETE /users/1 --> Xóa user có id = 1


// Thực hiện API như thế nào


const imageEl = document.getElementById("image");
const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
    try {
        // Gọi API ->
    }
})