// Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?

// checkElementExist([1,2,3,4,5], 5) => true
// checkElementExist([1,2,3,4,5], 6) => false

function checkElementExist(arr, n) {
    return arr.includes(n)
}

console.log(checkElementExist([1, 2, 3, 4, 5], 5))
console.log(checkElementExist([1, 2, 3, 4, 5], 6))

// Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào

// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []

function getElementGreater(array, n) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > n) {
            newArray.push(array[i])
        }
        return newArray
    }
}
console.log(getElementGreater([1, 2, 3, 4, 5], 3))

// Bài 3: Viết function để tạo mã màu HEX ngẫu nhiên.

// randomHexCode() => #728a98
// randomHexCode() => #a72938

function randomHexCode() {
    // Tạo ra mảng bao gồm 16 ký tự có thể có
    let characters = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        let 
    }
}



// Bài 4: Viết function để tạo mã màu RGB ngẫu nhiên.

// randomRgbCode() => rgb(213,43,133)
// randomRgbCode() => rgb(12,32,122)

function randomRgbCode() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
}
