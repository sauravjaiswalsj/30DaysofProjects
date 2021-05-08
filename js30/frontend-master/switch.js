'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter="";
    // Write your code here
    const firstLetter = s.charAt(0);
    switch(true){
        case ('aeiou'.indexOf(firstLetter)!=-1):
            letter= 'A';
        break;
        case ('bcdfg'.indexOf(firstLetter)!=-1):
            letter= 'B';
            break;
        case 'hjklm'.includes(firstLetter):
            letter= 'C';  
            break;
        case 'npqrstvwxyz'.includes(firstLetter):
            letter='D';
            break;
    }
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}