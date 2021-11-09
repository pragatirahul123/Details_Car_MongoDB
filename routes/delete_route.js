const express = require('express')
const router = express.Router()


const remove = require('../controller/delete')
router.delete('/',remove.unparkcar)

module.exports = router;