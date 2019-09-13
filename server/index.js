const express = require("express");
const session = require("express-session");
const massive = require('massive');
const axios = require('axios');
require("dotenv").config();

let { SERVER_PORT } = process.env;

const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected');
});

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
);

app.get("/api/wizard", wizardController.getHouses);
app.post("/api/wizard", wizardController.addHouse);
app.delete("/api/wizard/:id", wizardController.deleteHouse);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`);
});