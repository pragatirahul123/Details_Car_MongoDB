const connection = require('../database_connection/connection')
const cardb = require('../modle/connect')

exports.getcarid = (req,res)=>{
    let carnumber = req.params.carnumber
    cardb.findById(carnumber)
    .then((data)=>{
        res.status(200).send(data)
    })
    .catch((error)=>{
        res.send(400).send(error)
    })
    

    }

