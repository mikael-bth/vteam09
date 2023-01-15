const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const database = require('./../../db/database');
const dbSQL = require('./../../db/sql');

router.use(bodyParser.json({ strict: false }));

router.get('/scooter/id/:id',
    (req, res) => getScooter(req, res)
);

router.get('/activescooters',
    (req, res) => getActiveScooters(req, res)
);

router.put('/scooter/activate',
    (req, res) => activateScooter(req, res)
);

router.put('/scooter/deactivate',
    (req, res) => deActivateScooter(req, res)
);

router.get('/scooter/position',
    (req, res) => getScooterPosition(req, res)
);

router.put('/scooter/position',
    (req, res) => setScooterPosition(req, res)
);

async function getScooter(request, response) {
    const scooterID = request.params.id;
    let data;
    let db;

    try {
        db = database.getDB();
        data = await database.query(db, dbSQL.getScooter, [scooterID]);
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
        { data: data, msg: `Scooter with ID ${scooterID}`}
    );
}

async function getActiveScooters(request, response) {
    let data;
    let db;

    try {
        db = database.getDB();
        data = await database.query(db, dbSQL.getActiveScooter);
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
        { data: data, msg: "All active scooters in system"}
    );
}

async function activateScooter(request, response) {
    const scooterID = request.body.scooterID;
    const userID = request.body.userID;
    let data;
    let db;

    try {
        db = database.getDB();

        let scooter = await database.query(db, dbSQL.getScooter, [scooterID]);
        scooter = scooter[0]
        if (scooter.battery <= 20) {
            return response.status(401).json(
                { message: "Scooter battery low" }
            );
        } else if (scooter.live === 0) {
            return response.status(401).json(
                { message: "Scooter is not live" }
            );
        } else if (scooter.active === 1) {
            return response.status(401).json(
                { message: "Scooter already in use" }
            );
        } else if (scooter.service === 1) {
            return response.status(401).json(
                { message: "Scooter is waiting for service" }
            );
        }

        await database.run(db, dbSQL.activateScooter, [userID, scooterID]);
        data = `User ${userID} activated scooter ${scooterID}`;
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
        { data: data, msg: "Scooter activated"}
    );
}

async function deActivateScooter(request, response) {
    const scooterID = request.body.scooterID;
    const userID = request.body.userID;
    const payAmount = request.body.payAmount;
    let data;
    let db;

    try {
        db = database.getDB();
        await database.run(db, dbSQL.removeUserBalance, [payAmount, userID]);
        await database.run(db, dbSQL.deActivateScooter, [scooterID]);
        data = `User ${userID} deactivated scooter ${scooterID} and payed ${payAmount}`;
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
        { data: data, msg: "Scooter deactivated"}
    );
}

async function getScooterPosition(request, response) {
    const scooterID = request.body.id;
    let data;
    let db;

    try {
        db = database.getDB();
        data = await database.query(db, dbSQL.getScooterPosition, [scooterID]);
        data = data[0];
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
        { data: data, msg: `Scooter ${scooterID}s position`}
    );
}

async function setScooterPosition(request, response) {
    const scooterID = request.body.id;
    const position = request.body.position;
    let data;
    let db;

    try {
        db = database.getDB();
        await database.run(db, dbSQL.setScooterPosition, [position, scooterID]);
        data = `Scooter ${scooterID}s position set to ${position}`;
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
        { data: data, msg: `Updated scooter ${scooterID}s position`}
    );
}

module.exports = router;