const connection = require('../database_connection/connection')
const cardb = require('../modle/connect')

exports.unparkcar = (req,res)=>{
    let slotnumber = req.params.slotnumber
    cardb.findByIdAndDelete(slotnumber)
        .then((data)=>{
            res.status(200).send (data)
        }).catch((error)=>{
            res.status(400).send(error)

        })
}


