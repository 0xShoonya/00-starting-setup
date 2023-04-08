const express = require('express');

const router = express.Router();

const {contactController} = require('../controllers/contactUs')

router.get('/contactus', contactController)

module.exports = router;