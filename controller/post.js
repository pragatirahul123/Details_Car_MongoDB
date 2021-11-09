const connection = require('../database_connection/connection')
const cardb = require('../modle/connect')
require('dotenv').config()

let size_of_slot = process.env.size_of_slot



exports.carparking = (req,res)=>{
        let cardetail = new cardb({
            carnumber:req.body.carnumber

        })
        if (size_of_slot < 1) {
                res.send({ message: 'slot booked' })
                    
            }
        else {
                    cardetail.save((err, data) => {
                        if (err) {
                            res.send({ error: err.message })
                        }
                        else {
                            res.status(200).send({ success: `car is park at slot number ${data._id} ` })
                        }
                    })
                }

        

    }









