const express = require('express');
const router = express.Router();
const database = require('./../db/database');
const dbSQL = require('../db/sql');

router.get('/', async function(request, response) {
    const data = {
        data: "VTEAM09 API | V9-Scooter"
    }
    const db = database.getDB();
    try {
        const result = await database.query(db, dbSQL.getUsers)
        console.log(result);
        data.result = result;
    } catch (e) {
        return console.error(e.message)
    }
    await database.closeDB(db);
    response.json(data);
});

module.exports = router;