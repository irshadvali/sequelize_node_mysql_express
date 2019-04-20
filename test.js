console.log("irshad")
const csvFilePath = "./abc.csv"
const fs = require('fs')
var cc = require('coupon-code');
const path = '/Users/irshadvali/Downloads/abc.txt '

// try {
//   fs.unlinkSync(csvFilePath)
// console.log("here")
// } catch(err) {
//   console.error(err)
// }
for(var i=0; i<=1000; i++){
    console.log("cc.generate()===",cc.generate(),"======",i)
}
