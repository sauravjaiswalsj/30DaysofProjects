function help(){
const commandArgs = process.argv.slice(2);

const input = commandArgs[0].substring(2);

const helpArguments = [{
    command:'help',
    describe:'Find the below options helpful: ',
    handler:()=>{
        helpArguments.forEach(item=>{
            console.log(`${item.command} : ${item.describe}\n`);
        });
        return 'Enter command';
    }
},{
    command: 'add',
    describe:'adding the text',
    handler:()=>{
        return(`Adding text`);
    }
},{
    command:'remove',
    describe:'removing the text',
    handler:()=>{
        return(`Removing the text`);
    }
},{
    command:'delete',
    describe:'Delete a file',
    handler:()=>{
        return 'Delete a file';
    }
}];

helpArguments.map((item)=>{
    if(item.command===input){
        console.log(`${item.command}: ${item.handler()}`);
       
    }
});

}

module.exports= help;