var figlet = require('figlet');
var colors=require('colors');
 
figlet('Hello Ash how are you!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.red)
    //console.log(data.yellow);
});