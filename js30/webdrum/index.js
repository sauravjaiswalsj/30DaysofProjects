
const play = (e) =>{
    e.currentTime=0; // rewind to start
    e.play();
}
window.addEventListener('keydown', (e)=>{
   const key= e.which || e.keyCode;
   if(key===65){ // A
       const audio = new Audio('sounds/clap.wav');
       play(audio);
   }
   else if(key===83){  // S
       const audio = new Audio('sounds/boom.wav');
       play(audio);
   }
   else if(key===68){  //D
       const audio=new Audio('sounds/hihat.wav');
       play(audio);
   }
   else if(key=== 70){ //F
       const audio = new Audio('sounds/kick.wav');
       play(audio);
   }
   else if(key=== 71){ //G
    const audio = new Audio('sounds/openhat.wav');
    play(audio);
} else if(key=== 72){ //H
    const audio = new Audio('sounds/snare.wav');
    play(audio);
}else if(key=== 74){ // J
    const audio = new Audio('sounds/tink.wav');
    play(audio);
}
else if(key=== 75){ // K
    const audio = new Audio('sounds/ride.wav');
    play(audio);
}
else if(key=== 76){ // L
    const audio = new Audio('sounds/tom.wav');
    play(audio);
}
   else {
       return ;
   }
});



/************************particle js************************ */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value":100, "density": {
                "enable": false, "value_area": 00
            }
        }
        , "color": {
            "value": "#ffffff"
        }
        , "shape": {
            "type":"star", "stroke": {
                "width": 0, "color": "#000000"
            }
            , "polygon": {
                "nb_sides": 5
            }
            , "image": {
                "src": "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg", "width": 100, "height": 100
            }
        }
        , "opacity": {
            "value":0.5, "random":false, "anim": {
                "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
            }
        }
        , "size": {
            "value":4, "random":true, "anim": {
                "enable": false, "speed": 40, "size_min": 0.1, "sync": false
            }
        }
        , "line_linked": {
            "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
        }
        , "move": {
            "enable":true, "speed":14, "direction":"left", "random":false, "straight":true, "out_mode":"out", "bounce":false, "attract": {
                "enable": false, "rotateX": 600, "rotateY": 1200
            }
        }
    }
    , "interactivity": {
        "detect_on":"canvas", "events": {
            "onhover": {
                "enable": false, "mode": "grab"
            }
            , "onclick": {
                "enable": true, "mode": "repulse"
            }
            , "resize":true
        }
        , "modes": {
            "grab": {
                "distance":200, "line_linked": {
                    "opacity": 1
                }
            }
            , "bubble": {
                "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
            }
            , "repulse": {
                "distance": 200, "duration": 0.4
            }
            , "push": {
                "particles_nb": 4
            }
            , "remove": {
                "particles_nb": 2
            }
        }
    }
    , "retina_detect":true
}
);