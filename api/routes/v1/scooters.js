const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const database = require('./../../db/database');
const dbSQL = require('./../../db/sql');

router.use(bodyParser.json({ strict: false }));

router.get('/',
    (req, res) => getScooters(req, res)
);

router.post('/',
    (req, res) => addScooter(req, res)
);

router.put('/',
    (req, res) => updateScooter(req, res)
);

router.delete('/',
    (req, res) => removeScooter(req, res)
);

async function getScooters(request, response) {
    let data;
    let db;

    try {
        db = database.getDB();
        data = await database.query(db, dbSQL.getScooters);
    } catch (e) {
        return response.status(500).json({
            errors: {
                status: 500,
                title: "Database error",
                detail: e.message
            }
        });
    } finally {
        database.closeDB(db);
    }
    return response.status(200).json(
        { data: data, msg: "All scooters in system"}
    );
}

async function addScooter(request, response) {
    const newScooter = [request.body.battery, request.body.position,
        request.body.live, request.body.pickup, request.body.active,
        request.body.service, request.body.zone, request.body.lastUser];
    let data;
    let db;

    try {
        db = database.getDB();
        const result = await database.run(db, dbSQL.addScooter, newScooter);
        data = `${result} scooter/s added to database.`;
    } catch (e) {
        return response.status(500).json({
            errors: {
                status: 500,
                title: "Database error",
                detail: e.message
            }
        });
    } finally {
        database.closeDB(db);
    }
    return response.status(201).json(
        { data: data, msg: "Scooter added to database"}
    );
}

async function updateScooter(request, response) {
    const updatedScooter = [request.body.battery, request.body.position,
        request.body.live, request.body.pickup, request.body.active,
        request.body.service, request.body.zone, request.body.lastUser,
        request.body.id];
    let data;
    let db;

    try {
        db = database.getDB();
        const result = await database.run(db, dbSQL.updateScooter, updatedScooter);
        data = `${result} scooters/s updated in database.`;
    } catch (e) {
        return response.status(500).json({
            errors: {
                status: 500,
                title: "Database error",
                detail: e.message
            }
        });
    } finally {
        database.closeDB(db);
    }
    return response.status(201).json(
        { data: data, msg: "Scooter updated"}
    );
}

async function removeScooter(request, response) {
    const scooterID = request.body.id;
    let data;
    let db;
    
    try {
        db = database.getDB();
        const result = await database.run(db, dbSQL.deleteScooter, scooterID);
        data = `${result} scooter/s removed from database.`;
    } catch (e) {
        return response.status(500).json({
            errors: {
                status: 500,
                title: "Database error",
                detail: e.message
            }
        });
    } finally {
        database.closeDB(db);
    }
    return response.status(201).json(
        { data: data, msg: "Scooter removed"}
    );
}

module.exports = router