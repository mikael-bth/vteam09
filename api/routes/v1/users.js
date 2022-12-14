const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

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

function getUsers(request, response) {
    const data = [];
    return response.status(200).json(
        { data: data, msg: "All users in system"}
    );
}

function addUser(request, response) {
    const data = "User added to database";
    return response.status(201).json(
        { data: data, msg: "User added to database"}
    );
}

function updateUser(request, response) {
    const data = "User updated";
    return response.status(201).json(
        { data: data, msg: "User updated"}
    );
}

function removeUser(request, response) {
    const data = "User removed";
    return response.status(201).json(
        { data: data, msg: "User removed"}
    );
}

module.exports = router