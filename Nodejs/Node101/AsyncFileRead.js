// Async file read
const util = require('util');
const fs = require('fs');
const path = require('path');
// to get the input
//let input= require("get-stdin");
//TODO: get input from the cli
//getstdin().then(contentProcessor).catch(error);
const args = process.argv.slice(2);

let pathName = path.resolve(args.toString());

const processFile = (pathName)=>{
    fs.readFile(pathName,(err,content)=>{
        if(err){
            process.stderr.write(err.toString().toUpperCase());
        }else
            ContentProcessor(content.toString())
    });
};
processFile(pathName);
const ContentProcessor = (content)=>{
    process.stdout.write(content.toUpperCase());
}
console.log(process.env);