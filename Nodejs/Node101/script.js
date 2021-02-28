#!/usr/bin/env node

"use strict";

const { log } = require("console");

const printHelp = ()=>{
    console.log("Script Usage");
    console.log('Script.js  --help');
    console.log("");
    console.log("help       print the help");
}
// const args = require("minimist")(process.argv.slice(2),{
 //   boolean:["help"]
 //   string: ["file"]
//});
// console.log(args);

const args = process.argv.slice(2);
const Arguments ={
    help:args[0],
    file:args[1]
};
if(!Arguments.help){
    Arguments.help=true;
}
console.log(`File name: ${Arguments.file}`);
if(Arguments.help){
    printHelp();
}else if(Arguments.file){
    console.log(Arguments.file);
}else{
    process.stderr.write("error");
}
// Access the Argument 
//console.log(process.argv.slice(2));



// process.stdout.write("\nHello\n");