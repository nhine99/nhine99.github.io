// Truy cập thông qua id
const heading = document.getElementById("heading")
console.log(heading);

// Truy cập thông qua tag name
// HTMLCollection -> Giống như mảng, nhưng bản chất không phải là mảng
// HTMLCollection là tập hợp các Node ở dạng Element Node
// Node : Element Node, Text Node, Comment Node, Attribute Node, ...
const paras = document.getElementsByTagName("p")
console.log(paras);

console.log(paras[0]); // Truy cập para1
console.log(paras.length);

// Duyệt HTMLCollection
for (let i = 0; i < paras.length; i++) {
    console.log(paras[i])
    paras[i].style.color = "red";
}

Array.from(paras).forEach(element => {
    console.log(element);
});


// Truy cập thông qua mảng classname
const parasClassName = document.getElementsByClassName('para')
console.log(parasClassName)

// Truy cập thông qua CSS Selector, trả về phần tử đầu tiên tìm thấy

const h1 = document.querySelector('#heading')
console.log(h1)

const para1 = document.querySelector('p')
const para2 = document.querySelector('.para')
console.log(para2)

const p2 = document.querySelector('body ul:nth-child(6)')
console.log(p2)

// Truy cập thông qua CSS Selector, trả về danh sách các phần tử

const li2 =  document.querySelectorAll('body > ul li')
console.log(li2)

heading.style.color = "red"
heading.style.backgroundColor = "black"

// Lấy ra nội dung 
console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);

const ul1 = document.querySelector('.box')
console.log(ul1.innerHTML);
console.log(ul1.innerText);
console.log(ul1.textContent);

// Thay đổi nội dung
heading.innerHTML = "Xin chào";
heading.innerHTML = "<span>Xin chào các bạn</span>"
heading.innerText = "<span>Xin chào các bạn</span>"
heading.textContent = "<span>Xin chào các bạn...</span>"

// thay đổi thuộc tính
document.body.prepend(para1);
document.body.appendChild(para1)

// Thêm phần tử
const box = document.querySelector(".box")
box.prepend(para1)
box.appendChild(para1)
ul1.appendChild(para1)

// document.body.insertBefore(para1,para3)
//Tạo phần tử DOM 
// thêm phần tử đầu hoặc cuối

document.body.prepend(paras[0])
document.body.appendChild(paras[0])

ul1.appendChild(para1)

// thêm phần tử vị trí bất kì

// document.body.insertBefore(para1,paras[3])

// tạo node
// Vd : tạo input

const input = document.createElement('input')
input.type ='text'
input.placeholder = 'Enter name'
console.log(input)

document.body.insertBefore(input,paras[1])

// cách2

document.body.insertAdjacentElement('afterbegin',input)
heading.insertAdjacentElement('beforebegin',input)
ul1.insertAdjacentElement('beforebegin',input)

//VD2

ul1.insertAdjacentHTML('afterend','<button>Click me</button>')

const inputs = document.createElement('input');
inputs.type = 'text';
inputs.placeholder = 'Enter name';
console.log(inputs);
document.body.insertBefore(inputs, para2);

// Thêm phần tử DOM: Cách số 2.
// insertElement:
// document.body.insertAdjacentElement('afterbegin', link);


// box.insertAdjacentHTML('afterend', '<button>Click me</button>');


// Sử dụng vòng lặp để tạo nội dung và insert
let links = [
    {
        link: 'https://www.facebook.com/',
        title: 'Trang Facebook'
    },
    {
        link: 'https://www.instagram.com//',
        title: 'Trang Instagram'
    },
    {
        link: 'https://twitter.com/home?lang=vi/',
        title: 'Trang Twitter'
    }  
]

// Truy cập 
const socialMedia = document.querySelector('.social-media');

//cách 1: Tạo thẻ và chèn
// links.forEach(ele => {
//     const link = document.createElement('a');
//     link.innerText = ele.title;
//     link.href = ele.link;

//     socialMedia.appendChild(link);
// })

//Cách 2: insert trực tiếp html --> insertAdjacentHTML
links.forEach(ele => {
    socialMedia.insertAdjacentHTML('beforeend', `<a href="${ele.link}">${ele.title}</a>`)
})

//Cách 3: sử dụng innerHTML
// let html = '';
// links.forEach(ele => {
//     html += `<a href="${ele.link}">${ele.title}</a>`
// })

// socialMedia.innerHTML = html;

//Cách 4: sử dụng innerHTML
// links.forEach(ele => {
//     socialMedia.innerHTML += `<a href="${ele.link}">${ele.title}</a>`
// })

// Xoá: Thẻ cha và thẻ muốn xoá

// document.body.removeChild(heading); // Cách 1

heading.parentElement.removeChild(heading); // Cách 2

// Thay thế thẻ này bằng thẻ khác

const h3 = document.createElement('h3');
h3.innerText = 'Đây là thẻ H3';

document.body.replaceChild(h3, para3);

// sao chép (clone)

const boxCoppyTrue = box.cloneNode(true);
const boxCoppyFalse = box.cloneNode(false);

console.log(boxCoppyTrue);
console.log(boxCoppyFalse);

document.body.prepend(boxCoppyTrue);