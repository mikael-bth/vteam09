const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json({ strict: false }));

router.get('/:id',
    (req, res) => getScooter(req, res)
);

router.put('/activate',
    (req, res) => activateScooter(req, res)
);

router.put('/deactivate',
    (req, res) => deActivateScooter(req, res)
);

function getScooter(request, response) {
    const scooterID = request.params.id;
    const data = {};
    return response.status(200).json(
        { data: data, msg: `Scooter with ID ${scooterID}`}
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