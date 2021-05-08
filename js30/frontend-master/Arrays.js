const person=[];
const plea="Would She";

person.name="Mrs. White";
//person[plea]="I Would never";

console.log(person[plea]);
person.plea="I Would never";
console.log(person.plea);  


var box = {};
box = { "material" : "cardboard",
    "0":"meow",
"^&*":"testing 123"
      };
console.log(box);

 // Destructuring
 const {first,second} = {first:0, second:1};


 const game = {
     'suspect':[{
        name:"Rusty",
        color:"Red"
        },
        {
            name:"Miss Scarlet",
            color: "blue"
        }
     ]
 };

//console.log(game['suspect']);

 const loop = ()=>{
     /**
      *  for (let i=0; i< game.suspect.length;i++){
      *     console.console.log(game.suspect[i]);
      * }
      */
     game.suspect.forEach(element => {
            console.log(element);
     });
 }
 loop();

 const gameLoop = () =>{
     game.suspect.forEach(suspects => {
         if(suspects.name==="Rusty"){
             console.log("Found \'em " );
         }
         else{
             console.log("Next Time!");
         }
     });
 }
 gameLoop();

const [color1,color2] = [game .suspect[0].color,game.suspect[1].color]


 console.log(color1 + " " + color2);

 const [{color: firstColor},  {color: secondColor}] = game.suspect;
 console.log(firstColor + " " + secondColor);
 const [{name:Fname}]=game.suspect;
 console.log(Fname);