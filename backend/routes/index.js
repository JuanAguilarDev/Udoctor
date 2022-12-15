const express = require('express');
const router = express.Router();

const illnesses = require('./illnesses');

router.get('/', (req, res) => {
    res.json({"msg": "Welcome to udoctor API. "});
})

router.use('/illnesses', illnesses);

module.exports = router;