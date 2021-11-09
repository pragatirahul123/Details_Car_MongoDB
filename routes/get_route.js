const express = require('express')
const router = express.Router()


const get_data = require('../controller/get')
router.delete('/',get_data.getcarid)

module.exports = router;