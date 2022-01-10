//dependencies
const express = require('express')
const router = express.Router()
const fs = require('fs')


//shows notes from db
router.get('/notes', function (req, res) {
    notesData = fs.readFileSync('./db/db.json', 'utf-8'),
    res.send(notesData);
    console.log("baarg")
    console.log(typeof notesData)
    }
  );

router.post('/notes', (req, res) => {
    notesData = fs.readFileSync("./db/db.json", "utf8");  
    newNotesData = JSON.parse(notesData);
    req.body.id = newNotesData.length;
    newNotesData.push(req.body); // req.body - user input
    newNotesData = JSON.stringify(newNotesData);
    fs.writeFile("./db/db.json", newNotesData, "utf8", function(err) {
      if (err) throw err;
      res.json(notesData);
    });
    });

  module.exports = router;
