const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const database = require('./../../db/database');
const dbSQL = require('./../../db/sql');

router.use(bodyParser.json({ strict: false }));

router.get('/user/id/:id',
    (req, res) => getUser(req, res)
);

router.post('/user/login',
    (req, res) => loginUser(req, res)
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

async function loginUser(request, response) {
    const username = request.body.username;
    const password = request.body.password;
    let data;
    let db;

    try {
        db = database.getDB();
        const comparePass = await database.query(db, dbSQL.getUserPass, [username]);
        const userId = await database.query(db, dbSQL.getUserIdByUsername, [username]); // Get user Id

        if (comparePass.length === 0) {
            return response.status(401).json(
                { message: "User with that username not registered" }
            );
        }
        bcrypt.compare(password, comparePass[0].password, function (err, res) {
            if (!res) {
                return response.status(401).json(
                    { message: "Incorrect password" }
                );
            }
            data = `${username} logged in`;
            return response.status(200).json(
                { data: data, msg: "User logged in", id: userId[0].id}
            );
        });
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

async function userRideHistory(request, response) {
    const userID = request.body.id;
    let data;
    let db;

    try {
        db = database.getDB();
        data = await database.query(db, dbSQL.getRideHistory, [userID]);
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
        { data: data, msg: "User ride history"}
    );
}

async function userLastRide(request, response) {
    const userID = request.body.id;
    let data;
    let db;

    try {
        db = database.getDB();
        data = await database.query(db, dbSQL.getLastRide, [userID]);
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
        data = `User ${userID}s balance increased with ${balanceIncrease}`;
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
        data = `User ${userID}s balance decreased with ${balanceDecrease}`;
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