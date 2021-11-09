const express = require('express')
const router = express.Router()


router.use('/parkingcar',require('./post_route'))

router.use('/parkcar/:id_slot',require('./delete_route'))

router.use('/details_car/:number',require('./get_route'))



module.exports = router;
