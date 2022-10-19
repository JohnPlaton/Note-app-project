const fs = require('fs')
const update = function(note, oldNote){
    const updateNote = JSON.parse(oldNote)

    const newNote = updateNote.map(function(n,indx){
        if (n.id == note.id){
            n.title = note.title
            n.body = note.body
        }
        return n
    })
    fs.writeFileSync('./note.txt', JSON.stringify(newNote))
}
module.exports = update