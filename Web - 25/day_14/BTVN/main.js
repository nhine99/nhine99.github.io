// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.

function sortStudents(arr) {
  // return arr.sort().reverse();
  return arr.sort((a,b) => b.localeCompare(a, 'vi'))
}
console.log(sortStudents(['Nam','Đức', 'Hoa', 'Tuấn', 'Anh']))

// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng

function shuffle(arr) {
  let newArr = [];
  newArr = arr.sort(() => Math.random() - 0.5);
  return newArr;
}
console.log(shuffle([1, 2, 3, 4, 5]))

// Bài 3 Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng

function symmetricDifference(arr1,arr2) {
  let newArr = [];
  for ( let i =0;i< arr1.length; i ++ ){
    if (!arr2.includes(arr1[i]))  {
      newArr.push(arr2[i])
    }
  }
  for ( let i =0;i< arr1.length; i ++ ){
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr1[i])
    }
  }
  return newArr;
  
}
console.log(symmetricDifference([1, 2, 3], [1, 2, 4]))


// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng

function union(arr1 = [], arr2 = []) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
      if (newArr.indexOf(arr1[i]) == -1) {
          newArr.push(arr1[i]);
      }
  }

  for (let i = 0; i < arr2.length; i++) {
      if (newArr.indexOf(arr2[i]) == -1) {
          newArr.push(arr2[i]);
      }
  }
  return newArr;
}
console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]));
console.log(union([1, 2, 3, 1], [4, 3, 2, 4]));