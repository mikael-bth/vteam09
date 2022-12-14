const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

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

function getScooter(request, response) {
    const scooterID = request.params.id;
    const data = {};
    return response.status(200).json(
        { data: data, msg: `Scooter with ID ${scooterID}`}
    );
}

function getActiveScooters(request, response) {
    const data = [];
    return response.status(200).json(
        { data: data, msg: "All active scooters in system"}
    );
}

function activateScooter(request, response) {
    const data = "Scooter activated";
    return response.status(201).json(
        { data: data, msg: "Scooter activated"}
    );
}

function deActivateScooter(request, response) {
    const data = "Scooter deactivated";
    return response.status(201).json(
        { data: data, msg: "Scooter deactivated"}
    );
}

module.exports = router;