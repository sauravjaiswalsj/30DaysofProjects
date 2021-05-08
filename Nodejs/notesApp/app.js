const fs = require('fs');
const help = require('./help');
const notes = require('./notes');

if(process.argv[2]){
    help();
}

fs.writeFileSync('notes.txt','The file was created by nodejs.');

fs.appendFileSync('notes.txt','\nnew line was appended by nodejs.');

process.stdout.write(fs.readFileSync('./notes.txt'));

process.stdout.write('\n'+notes()+'\n');

