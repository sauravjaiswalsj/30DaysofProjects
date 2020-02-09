const press1 =  document.querySelector("#b1");
const press2 =  document.querySelector("#b2");
const press3 =  document.querySelector("#b3");
const press4 =  document.querySelector("#b4");
//const press5 =  document.querySelector(".key5");
//const press6 =  document.querySelector(".key6");
const passText =  document.querySelector('#ShowText');

press1.addEventListener('click',()=>{
    console.log('hell oworld');
    passText.innerHTML('hello');
});
press2.addEventListener('click',()=>{
    console.log('world');
    passText.innerHTML('worl');
});