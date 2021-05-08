const username="sauravjaiswalsj";
const email='sauravjaiswal999@gmail.com';
let arr = [];
const isValid = (input)=>{
    if(!input){
        console.log('blank');
    }else{
            arr.push(input);
    }
}
isValid(username);
isValid(email);
arr.forEach(item=>{
    console.log(item);
})