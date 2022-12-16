

const getData = (req, res) => {
    const data = require('../data/db.json');
    res.status(200).json(data);
}

const getIllness = (req, res) => {
    const data = require('../data/db.json');
    // const body = req.body;
    const body = [123, 124, 125, 126, 127, 127];

    const util = [];

    data.illnesses.map(illness => {
        util.push(
            {
                name: illness.name,
                id: illness.id
            }
        );
    });

    
    util.map((element, index) => {
        let count = 0;
        body.map(_ =>{
                util[index] = {
                    ...element, 
                    ['occurs']: count 
                }   
            })
    });

    util.map((element, index) => {
        let count = 0;
        body.map(id=>{
            if(element.id == id){
                count+=1;   
                util[index] = {
                    ...element, 
                    ['occurs']: count 
                }   
            }
        })
    });

    let name = '';
    let max = 0;
    for(let i = 0; i < util.length-1; i++){
        console.log(max);
        if(max < util[i+1].occurs){
            max = util[i+1].occurs;
            name = util[i+1].name;
        }
    }

    res.status(200).json({"Your illness is: ": {name, max}});
}


module.exports = {
    getData,
    getIllness
}