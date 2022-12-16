const router = require('express').Router();

const {
    getData,
    getIllness
} = require('../controllers/illnesses');

router.get('/data', getData);
router.get('/illness', getIllness);

module.exports = router;