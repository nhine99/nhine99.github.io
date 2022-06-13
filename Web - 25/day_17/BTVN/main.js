// Bài 1
const text = document.getElementById("text")
console.log(text);
text.style.color = "#777"
text.style.fontSize = "2rem"
text.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."

// Bài 2
let x = document.querySelectorAll('.text1 li')

console.log(x)
for (let i = 0; i < x.length; i++) {
    console.log(x[i])
    x[i].style.color = "blue";
}


// Bài 3
let items = [
    {
        text: 'Item 8' 
    },
    {
        text: 'Item 9'
    },
    {
        text: 'Item 10'
    }
]

let list = document.querySelector('#list')
items.forEach((e) =>{
    list.insertAdjacentHTML('beforeend',`<li>${e.text}</li>`)
})

// 3.2 :
let li1Red = list.querySelector('li:first-child')
li1Red.style.color = 'red'

// 3.3 :
let li3 = list.querySelector('li:nth-child(3)')
li3.style.backgroundColor = 'blue'

// 3.4 :
let li4 = list.querySelector('li:nth-child(4)')
li4.parentNode.removeChild(li4)

// 3.5 :
let newLi4 = document.createElement('li')
newLi4.innerText = 'Nội dung bất kì'
let li5 = list.querySelector('li:nth-child(4)')
li5.insertAdjacentElement('beforebegin',newLi4)
