const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();

// Verwenden Sie body-parser, um Anforderungskörper zu parsen
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Öffnen Sie eine Verbindung zur Datenbank
const db = new sqlite3.Database('./djk_database/djk_database.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Verbunden mit der Datenbank');
});

// API-Route zum Abrufen von Daten aus der Datenbank
app.get('/api/data', (req, res) => {
    // Lesen Sie den Query-Parameter "userId" aus
    const user_nummer = req.query.user_nummer;
    let query = 'SELECT * FROM benutzer';
    // Wenn der Query-Parameter "userId" angegeben wurde, fügen Sie ihn der Abfrage hinzu
    if (userId) {
        query = `${query} WHERE id = ${userId}`;
    }
    // Senden Sie die Abfrage an die Datenbank
    db.all(query, (err, rows) => {
        if (err) {
            // Senden Sie einen Fehler zurück, wenn ein Fehler auftritt
            res.status(500).json({ error: err.message });
            return;
        }
        // Senden Sie die Ergebnisse zurück
        res.json({ users: rows });
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
