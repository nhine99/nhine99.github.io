let money = 1000;

switch (money) {
    case 12000:
    case 15000:
    case 20000: {
        console.log("Cafe sữa");
        break;
    }
    case 10000: {
        console.log("Cafe đá");
        break;
    }
    case 8000: {
        console.log("Sting dâu");
        break;
    }
    case 2000: {
        console.log("Trà đá");
        break;
    }
    default: {
        console.log("Không có đồ uống phù hợp");
        break;
    }
}

//# Bài tập : Switch - case


// Bài Tập 1
let day = 3;

switch (day) {
    case 0: {
        console.log("Chủ Nhật");
        break;
    }
    case 1: {
        console.log("Thứ Hai");
        break;
    }
    case 2: {
        console.log("Thứ Ba");
        break;
    }
    case 3: {
        console.log("Thứ Tư");
        break;
    }
    case 4: {
        console.log("Thứ Năm");
        break;
    }
    case 5: {
        console.log("Thứ Sáu");
        break;
    }
    case 6: {
        console.log("Thứ Bảy");
        break;
    }
    default: {
        console.log("Không có ngày phù hợp")
        break;
    }
}

//Bài Tập 2
let month = 6;
switch (month) {
    case 1:
    case 2:
    case 3: {
        console.log("Mùa Xuân");
        break;
    }
    case 4:
    case 5:
    case 6: {
        console.log("Mùa Hạ");
        break;
    }
    case 7:
    case 8:
    case 9: {
        console.log("Mùa Thu");
        break;
    }
    case 10:
    case 11:
    case 12: {
        console.log("Mùa Đông");
        break;
    }
    default: {
        console.log("Không có mùa nào");
        break;
    }
}
