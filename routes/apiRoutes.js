//dependencies
const express = require('express')
const router = express.Router()
const fs = require('fs')

//shows notes from db
router.get('/notes', function (req, res) {
    notesData = fs.readFileSync('./db/db.json', 'utf-8'),
    res.send(notesData);
    }
  );

router.post('/notes', (req, res) => {
    notesData = fs.readFileSync("./db/db.json", "utf8");  
    newNotesData = JSON.parse(notesData);
    req.body.id = newNotesData.length;
    newNotesData.push(req.body); // req.body = user input
    newNotesData = JSON.stringify(newNotesData);
    fs.writeFile("./db/db.json", newNotesData, "utf8", function(err) {
      if (err) throw err;
      res.json(notesData);
    });
  });

router.delete('/notes/:id', function (req, res) {
     notesData = fs.readFileSync('./db/db.json', 'utf-8');
     newNotesData = JSON.parse(notesData);
     console.log(newNotesData)
  var filterNote = newNotesData.filter(note => note.id != req.params.id)
    console.log(filterNote) 
    filterNote = JSON.stringify(filterNote)
    fs.writeFile("./db/db.json", filterNote, "utf8", function(err) {
      if (err) throw err;
      res.json(notesData);
      })
    })

  module.exports = router;
