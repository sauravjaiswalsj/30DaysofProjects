document.title="Todo App";

const odd = document.querySelectorAll('li:nth-child(odd');

odd.forEach(item=>{
    item.style.backgroundColor ="#f4f4f4";
});
console.log(document.querySelector('#items').parentNode);
console.log(document.querySelector('#items').children);

console.log(document.querySelector('#items').firstElementChild);

// let newDiv = document.createElement('div');
// newDiv.className='hello';
// newDiv.id='hello1';
// newDiv.setAttribute('title','Hello DIv');

// var newDivText =  document.createTextNode('Hello World');

// newDiv.appendChild(newDivText); 
// console.log(newDiv);

// let container = document.querySelector('.container');

// var h2 = document.querySelector('h2 .title');

// container.insertBefore(newDiv,h2);
const form = document.querySelector('form');
const button= document.querySelector('button');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(e.type);
});