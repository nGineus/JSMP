const mongoose = require('mongoose');

const Group = mongoose.model('Group', {
  name: String,
  state: String,
  devices: []
});

module.exports = Group;
