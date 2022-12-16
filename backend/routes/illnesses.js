const router = require('express').Router();

const {
    getData
} = require('../controllers/illnesses');

router.get('/data', getData);
router.get('/illness', );

module.exports = router;