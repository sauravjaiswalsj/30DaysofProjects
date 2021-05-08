// Clue GameCharacters
/** 
 *  Board GameCharacters
 * Piece for characters weapons,
 * 
 * Data -> characters, weapons, rooms
 */
/**
 var game = {};
 game.murderer= " ??";
 game['weapons'] = ['lasers' , 'angry cats' , 'snap'];
 game['rooms']=['library','game room','bed']
 game.name=[];
 game.name.push("Mr. Hello");
 game.name.push("Mr.bye");
*/

const game ={
    "murderer": "??",
    "weapons":[
        'lasers','angry cats','snap'
    ],
    "rooms":[
        'library','game room','bed'
    ],
    "name":[
        'Mr. hello',
        'Mr. Bye'
    ]
};
 console.log(game);
 const {weapons,rooms,name}={
     "weapons":"lasers",
    "rooms":"library",
    "name":"Mr. hello"
}
console.log(name);