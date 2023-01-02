const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;
app.use(express.json());
const db = new sqlite3.Database('./djk_database/djk_database.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Verbunden mit der Datenbank');
});
app.get('/users', function (req, res) {
    db.get('SELECT vorname FROM benutzer WHERE user_nummer = 6', (err, row) => {
        if (err) {
            console.error(err.message);
            res.sendStatus(500); // Internal Server Error
        } else if (row) {
            res.send(row);
            console.log(row);
        } else {
            res.sendStatus(404); // Not Found
            console.log('Keine Daten gefunden');
        }
    });
});

app.get('/termine', function (req, res) {
    db.get('SELECT * FROM termine', (err, row) => {
        if (err) {
            console.error(err.message);
            res.sendStatus(500); // Internal Server Error
        } else if (row) {
            res.json(row);
            console.log(row);
        } else {
            res.sendStatus(404); // Not Found
            console.log('Keine Daten gefunden');
        }
    });
});
// API-Route zum Einfügen von Daten in die Datenbank
app.post('/api/data', (req, res) => {
    // Lesen Sie die Daten aus dem Anforderungskörper aus
    const name = req.body.vorname;
    const nachname = req.body.nachname;
    const geburtsdatum = req.body.geburtsdatum;
    // Senden Sie eine Einfügeabfrage an die Datenbank
    db.run(
        'INSERT INTO users (vorname, nachname, geburtsdatum) VALUES (?, ?, ?)',
        [name, nachname, geburtsdatum],
        function(err) {
            if (err) {
                // Senden Sie einen Fehler zurück, wenn ein Fehler auftritt
                res.status(500).json({ error: err.message });
                return;
            }
        }
    );
});

// Starten Sie den Server
app.listen(3000, () => console.log('Server läuft auf Port 3000'));
