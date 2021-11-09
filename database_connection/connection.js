const mongoose = require("mongoose");
require('dotenv').config()
const db = process.env.URL




// const database = "mongodb+srv://pragati:pragati1234@cluster0.lpdcm.mongodb.net/demo?retryWrites=true&w=majority" 

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(data =>{
    console.log("connection database successfully")

})
.catch(err=>{
    console.log(err)
})
    
