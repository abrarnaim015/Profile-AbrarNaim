const router = require('express').Router()
const ProfileController = require('../controllers/home-controller')

router.get('/', ProfileController.AllDataProfile)

module.exports = router