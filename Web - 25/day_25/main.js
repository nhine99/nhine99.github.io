$("#heading").html("Xin chào các bạn");
// $("#heading").css("color", "red");
// $("#heading").css("background-color", "black")

$("#heading").css({
    "color": "red",
    "background-color": "black"
})

// Lắng nghe sự kiện
$("#heading").click(function() {
    alert("Click vào thẻ H1")
})

// Sử dụng vòng lặp
$("p").each(function(index, element) {
    $(element).html(` Thẻ para ${index + 1} đã được thay đổi nội dung `);
    $(element).css("color", "blue");
})

// Truy cập vào 1 thẻ thông qua chỉ số 
$("p").eq(1).html("Thẻ này được thay đổi nội dung");

$("p").first().css("color", "pink");
$("p").last().css("color", "green");

// Thêm 
$("p").last().after("<button>Click me</button>")

// Xóa 
$(".box ul").children().first().remove();

// Thay thế
$("p").first().replaceWith(`input tyle-"text" placeholder-"Nhập nội dung">`);

// Copy
$("#heading").clone().appendTo("body");

// Ẩn hiện
$("ul").last().css({
    "background-color": "black",
    "color": "white"
})

$("button").click(function(){
    $("ul").last().slideToggle()
})