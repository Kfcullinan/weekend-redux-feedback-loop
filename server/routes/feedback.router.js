const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET feedback
router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "feedback"';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});
module.exports = router;