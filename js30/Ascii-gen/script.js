const pressButton = document.querySelector('#button');
const sendAscii = document.querySelector('#AsciiText')
window.addEventListener("keydown", ()=>{
    let letters;
    if(event.code==="Space"){
        letters=event.code;
    }else{
        letters= event.key;
    }     
    pressButton.value=letters;
    const item =  event.which || letters;
    sendAscii.innerHTML = item;
});
