

const getData = (req, res) => {
    const data = require('../data/db.json');
    res.status(200).json(data);
}

const getIllness = (req, res) => {
    const data = require('../data/db.json');
    const body = req.body;

    const info = [];

    data.illnesses.map(illness => {
        info.push(illness.name);
    });

    res.status(200).json({"msg": info});
}


module.exports = {
    getData,
    getIllness
}