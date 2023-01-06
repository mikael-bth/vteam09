const sqlite3 = require('sqlite3').verbose();

const database = {
    getDB: function getDB() {
        return new sqlite3.Database('./../db/vteam.sqlite', (err) => {
            if (err) {
              throw new Error(err.message);
            }
            console.log('Connected to the database.');
        });
    },

    closeDB: function closeDB(database) {
        database.close((err) => {
            if (err) {
                throw new Error(err.message);
            }
            console.log('Database connection closed.');
        });
        return true;
    },

    query: function query(db, sql, params = []) {
        return new Promise(function(resolve, reject) {
            db.all(sql, params, function(err, rows)  {
                if(err) reject(err.message)
                resolve(rows)
            });
        });
    }
}

module.exports = database;