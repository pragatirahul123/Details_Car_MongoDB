const mongoose = require('mongoose')

carSchema = new mongoose.Schema({

    carnumber: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('cardata',carSchema)