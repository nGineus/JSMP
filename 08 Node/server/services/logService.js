const Log = require('../models/log');

async function getLogById(id) {
  return await Log.find({
    id: id
  }).select('-_id -__v -deviceId').exec();
}

async function logState(id, state) {
  console.log('logState.... ', id, state);
  const newLog = new Log({
    date: new Date().toLocaleString(),
    action: state === 'off' ? 'Off' : 'On',
    id: id
  });
  newLog.save();
}

module.exports = {
  getLogById,
  logState
};
