const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');
const filename = 'djk.sqlite'
const db = new sqlite3.Database(filename, sqlite3.OPEN_READWRITE, (error) => {
    if (error) {
        console.error(error.message);
    }
    console.log('Verbindung zur sqlite Datenbank '+filename+' hergestellt.');
});
app.get('/users', (request, response) => {
    db.all('SELECT * FROM users', (error, rows) => {
        if (error) {
            throw error;
        }
        response.send(rows);
    });
});

const port = 3000;
app.listen(port, () => {
    console.log('Webserver läuft auf Port '+port);
});