const express = require("express");
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 1337;

app.use(cors());

const index = require('./routes/index');
const v1 = require('./routes/v1');

app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    next();
});

app.use('/', index);
app.use('/v1', v1);

// Catches errors and returns it to the user.
app.use((req, res, next) => {
    var err = new Error("Not Found");

    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    res.status(err.status || 500).json({
        "errors": [
            {
                "status": err.status,
                "title":  err.message,
                "detail": err.message
            }
        ]
    });
});

app.listen(port, () => { console.log(`API listening on port ${port}`) });
