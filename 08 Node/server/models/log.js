const mongoose = require('mongoose');

const Log = mongoose.model('Log',
  {
    date: String,
    action: String,
    id: String
  });

module.exports = Log;
