const mongoose = require('mongoose');

const Device = mongoose.model('Model', {
  name: String,
  address: String,
  port: Number,
  state: String,
  groupId: String
});

module.exports = Device;
