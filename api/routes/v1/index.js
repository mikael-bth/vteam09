const express = require('express');
const router = express.Router();

router.get('/', function(request, response) {
    const data = {
        data: "Version 1 of VTEAM09 API"
    }
    response.json(data);
});

module.exports = router;