const express = require('express')
const router = express.Router()
const { ApplicationsController } = require('../http/Controllers')

router.get('', ApplicationsController.index)

module.exports = router
