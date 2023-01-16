const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const database = require('./../../db/database');
const dbSQL = require('./../../db/sql');

router.use(bodyParser.json({ strict: false }));

router.get('/',
    (req, res) => getUsers(req, res)
);

router.post('/',
    (req, res) => addUser(req, res)
);

router.put('/',
    (req, res) => updateUser(req, res)
);

router.delete('/',
    (req, res) => removeUser(req, res)
);

async function getUsers(request, response) {
    let data;
    let db;
    
    try {
        db = database.getDB();
        data = await database.query(db, dbSQL.getUsers);
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
        { data: data, msg: "All users in system"}
    );
}

async function addUser(request, response) {
    const password = await bcrypt.hash(request.body.password, 10);
    const newUser = [request.body.username, password, 0, false, false, new Date().toUTCString()];
    let data;
    let db;
    let userId;
    try {
        db = database.getDB();
        const result = await database.run(db, dbSQL.addUser, newUser);
        data = `${result} user/s added to database.`;
        userId = await database.query(db, dbSQL.getUserIdByUsername, [request.body.username]); // Get user Id
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
        { data: data, msg: "User added to database", id: userId[0].id}
    );
}

async function updateUser(request, response) {
    const password = await bcrypt.hash(request.body.password, 10);
    const updatedUser = [request.body.username, password, request.body.balance,
        request.body.permission, request.body.active, request.body.id];
    let data;
    let db;

    try {
        db = database.getDB();
        const result = await database.run(db, dbSQL.updateUser, updatedUser);
        data = `${result} user/s updated in database.`;
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
        { data: data, msg: "User updated in database"}
    );
}

async function removeUser(request, response) {
    const userID = request.body.id;
    let data;
    let db;

    try {
        db = database.getDB();
        const result = await database.run(db, dbSQL.deleteUser, userID);
        data = `${result} user/s removed from database.`;
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
        { data: data, msg: "User removed from database"}
    );
}

module.exports = router