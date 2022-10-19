const fs = require('fs');

const write = function(data='default'){
    fs.writeFileSync('note.txt' , data)

}

module.exports = write;