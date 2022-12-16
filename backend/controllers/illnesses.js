

const getData = (req, res) => {
    const data = require('../data/db.json');
    res.status(200).json(data);
}


module.exports = {
    getData
}