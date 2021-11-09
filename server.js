const express = require('express')
const app = express()
app.use(express.json())
const morgan = require('morgan')
app.use(morgan('dev'))
require('dotenv').config()
const port = process.env.port
require('./database_connection/connection')





app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})








