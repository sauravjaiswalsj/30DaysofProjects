const path = require('path');
const fs = require('fs');
const args = process.argv.slice(2);

let pathName = path.resolve(args.toString());
console.log(pathName);
// gives the dir name
console.log(__dirname);

const processFile = (pathName)=>{
    var contents = fs.readFileSync(pathName,"UTF-8");
    process.stdout.write(contents);
    //console.log(contents); // gives the binary buffers
};
processFile(pathName);