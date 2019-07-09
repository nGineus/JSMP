const mongoose = require('mongoose');

const DeviceLog = mongoose.model('DeviceLog',
  {
    date: String,
    action: String,
    deviceId: String
  });

module.exports = DeviceLog;
