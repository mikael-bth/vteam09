const express = require('express');
const router = express.Router();

router.get('/', function(request, response) {
    const data = {
        data: "VTEAM09 API | V9-Scooter"
    }
    response.json(data);
});

module.exports = router;