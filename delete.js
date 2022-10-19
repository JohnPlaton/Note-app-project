const fs = require('fs')

const del = function(id, oldNote) {
    let note = JSON.parse(oldNote)

    let newNote = note.filter(function(n,indx) {
        return n.id !== id
    })
 
    fs.writeFileSync('./note.txt', JSON.stringify(newNote))
}

module.exports = del

