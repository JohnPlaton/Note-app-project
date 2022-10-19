const fs = require('fs');
const { stringify } = require('querystring');

const add = function(note=[], oldNote) {
    let finalNote = JSON.parse(oldNote);

    finalNote.push(note);
    
    let ObjectNote = JSON.stringify(finalNote);

    fs.writeFileSync('./note.txt', ObjectNote);
}

module.exports = add