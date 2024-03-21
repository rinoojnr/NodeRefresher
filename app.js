const os = require('os');
const path = require('path');

console.log(os.freemem());
console.log(os.totalmem());
console.log(os.release());
console.log(os.type());
console.log(os.uptime());



const filePath = path.join('/home', 'anupama', 'Sharpener Main'); // join is used to combine path

console.log(filePath);
console.log(path.basename(filePath));
