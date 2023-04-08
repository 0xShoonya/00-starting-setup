const path = require('path')

exports.contactController = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'contactUs.html'));
  }