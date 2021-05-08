const { createReadStream, createWriteStream } = require("fs");
const { Transform } = require("stream");

let inStream = createReadStream('./path.js'); //readable
let  outStream= createWriteStream('./file2.txt'); //writeable

// const processStream = (inStream)=>{
//     console.log(`in ProcessStream`);
//     let newStream = new Transform((chuck,encoding,callback)=>{
//         console.log(`in Transform Stream`);
//         console.log(chuck.toString());
//         callback();
//     });
// }

const processStream =(inStream)=>{
    console.log(`in Process Stream`);
    let newStream =  new Transform({
        transform(chunk,encoding,callback){
            console.log(`in Transform Stream`);
            console.log(chuck.toString());
            callback();
        }
    });
}
processStream(inStream);











//let outStream = inStream.pipe(outStream); // take the readable stream and write to the writeable stream
// console.log(outStream);
// process.stdout.write(.toString());
// const processFile = (inStream)=>{
//     outStream=inStream;
//     let upperStream = new Transform({
//         transform(chuck,enc,callBack){
//             this.push(chuck.toString().toUpperCase());
//             callBack();
//         }
//     });
//     outStream=upperStream.pipe(outStream);
//    // var targetStream = process.stdout;
//    // outStream.pipe(targetStream);
// }
// processFile(inStream);
// // let TransformStream = new Transform;
// // TransformStream._transform =(chuck,encoding,callback)=>{
// //     this.push(chuck.toString().toUpperCase());
// //     callback();
// // }
// // process.stdin.pipe(TransformStream);