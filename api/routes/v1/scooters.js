const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

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

function getScooters(request, response) {
    const data = []
    return response.status(200).json(
        { data: data, msg: "All scooters in system"}
    );
}

function addScooter(request, response) {
    const data = "Scooter added to database"
    return response.status(200).json(
        { data: data, msg: "Scooter added to database"}
    );
}

function updateScooter(request, response) {
    const data = "Scooter updated"
    return response.status(200).json(
        { data: data, msg: "Scooter updated"}
    );
}

function removeScooter(request, response) {
    const data = "Scooter removed"
    return response.status(200).json(
        { data: data, msg: "Scooter removed"}
    );
}

module.exports = router