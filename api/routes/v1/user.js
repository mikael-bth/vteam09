const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

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

function getUser(request, response) {
    const userID = request.params.id;
    const data = {};
    return response.status(200).json(
        { data: data, msg: `User with ID ${userID}`}
    );
}

function getActiveUsers(request, response) {
    const data = [];
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

function addUserBalance(request, response) {
    const data = "Balance added to user";
    return response.status(201).json(
        { data: data, msg: "Balance added to user"}
    );
}

function removeUserBalance(request, response) {
    const data = "Balance removed from user";
    return response.status(201).json(
        { data: data, msg: "Balance removed from user"}
    );
}

module.exports = router;