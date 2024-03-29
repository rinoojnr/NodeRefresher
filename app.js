//os ---------------------------------------------

const os = require('os');

console.log(os.freemem());
console.log(os.totalmem());
console.log(os.release());
console.log(os.type());
console.log(os.uptime());



//path --------------------------------------------

const path = require('path');

const filePath = path.join('/home', 'anupama', 'Sharpener Main'); // join is used to combine path

console.log(filePath);
console.log(path.basename(filePath));



//fs ----------------------------------------------

// const fs = require('fs');

// const text = fs.readFileSync('./sampleText/text.txt','utf-8');
// console.log(text);

const { readFileSync, writeFileSync, readFile, writeFile } = require('fs');

const filePathForRead = path.join('./sampleText','text.txt')
const text = readFileSync('./sampleText/text.txt','utf-8');
const text2 = readFileSync(filePathForRead,'utf-8');
console.log(text2);
console.log(text);

const filePathForWrite = path.join('./sampleText/write.txt')

writeFileSync(filePathForWrite,`hi ${text}`);

// read file sync 

readFile(filePathForRead, 'utf-8', (err,result) => {
    if(err) {
        console.log(err);
        return;
    } 
    console.log(result,">> read sync");
});

//write file sync

writeFile('./sampleText/writesync.txt', 'This is write file sync' , (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
});