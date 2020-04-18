window.addEventListener('keydown', (e)=>{
    const audio = document.querySelector(`audio[data-key="${e.keycode}]"`);
    console.log(audio);
});
