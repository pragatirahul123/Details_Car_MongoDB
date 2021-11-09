const express = require('express')
const router = express.Router()


const create = require('../controller/post')
router.post('/',create.carparking)

module.exports = router;

