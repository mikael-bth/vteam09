const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const database = require('./../../db/database');
const dbSQL = require('./../../db/sql');

router.use(bodyParser.json({ strict: false }));

router.get('/user/id/:id',
    (req, res) => getUser(req, res)
);

router.get('/activeusers',
    (req, res) => getActiveUsers(req, res)
);

router.get('/user/ridehistory',
    (req, res) => userRideHistory(req, res)
);

router.get('/user/lastride',
    (req, res) => userLastRide(req, res)
);

router.put('/user/addbalance',
    (req, res) => addUserBalance(req, res)
);

router.put('/user/removebalance',
    (req, res) => removeUserBalance(req, res)
);

async function getUser(request, response) {
    const userID = request.params.id;
    let data;
    let db;

    try {
        db = database.getDB();
        data = await database.query(db, dbSQL.getUser, [userID]);
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
        { data: data, msg: `User with ID ${userID}`}
    );
}

async function getActiveUsers(request, response) {
    let data;
    let db;

    try {
        db = database.getDB();
        data = await database.query(db, dbSQL.getActiveUser);
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
        { data: data, msg: "All active users in system"}
    );
}

function userRideHistory(request, response) {
    const data = [];
    return response.status(200).json(
        { data: data, msg: "User ride history"}
    );
}

function userLastRide(request, response) {
    const data = {};
    return response.status(200).json(
        { data: data, msg: "User most recent ride in history"}
    );
}

async function addUserBalance(request, response) {
    const userID = request.body.id;
    const balanceIncrease = request.body.balanceIncrease;
    let data;
    let db;

    try {
        db = database.getDB();
        await database.run(db, dbSQL.addUserBalance, [balanceIncrease, userID]);
        data = `User ${userID}s balance increased with ${balanceIncrease}.`;
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
        { data: data, msg: "Balance added to user"}
    );
}

async function removeUserBalance(request, response) {
    const userID = request.body.id;
    const balanceDecrease = request.body.balanceDecrease;
    let data;
    let db;

    try {
        db = database.getDB();
        await database.run(db, dbSQL.removeUserBalance, [balanceDecrease, userID]);
        data = `User ${userID}s balance decreased with ${balanceDecrease}.`;
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
        { data: data, msg: "Balance removed from user"}
    );
}

module.exports = router;