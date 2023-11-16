const express = require('express');
const app = express();
const cors = require('cors')
const fs = require('fs')
app.use(cors())
// localhost:3000
const PORT = 3000 || process.env.PORT

// testkommentar

// um auf umgebunsvariable zuzugreifen
require('dotenv').config()

let globallist

fs.readFile("plulist.json", 'utf8', (err, liste) => {
    // Wenn Fehler auftaucht , Fehler anzeigen
    if (err) {
      console.error('Error reading JSON file:', err);
      return;
    // Wenn kein Fehler auftaucht 
    }
    else {
        // Unsere Liste
        globallist = liste
    }
  }
)


app.get("/", function(req,res){
                // JSON OBJECT
    res.json({ message:'Willkommen bei der PLU APP' })
})

// localhost:3000/plulist
app.get('/plulist', function(req, res) {
    // JSON ARRAY
    console.log(globallist)
    res.send(globallist); 
  });


app.listen(PORT, ()=> { console.log("SERVER LÄUFT auf PORT " + PORT) } )