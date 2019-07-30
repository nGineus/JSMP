const Device = require('../models/devices');
const logService = require('../services/logService');
const sendRequest = require('../utils/request');

function deviceAdapter(device) {
  const {_id, name, address, port, state, groupId} = device;
  return {
    id: _id, name, groupId: groupId || null, address, port, state
  };
}

async function getDevices() {
  const devices = await Device
    .find()
    .exec();
  return devices.map(deviceAdapter);
}

async function getDeviceById(deviceId) {
  const device = await Device.findById(deviceId).exec();
  return deviceAdapter(device);
}

async function removeDevice(deviceId) {
  await Device.findByIdAndDelete(deviceId).exec();
}

async function addDevice(device) {
  const newDevice = new Device({
    state: 'off',
    ...device
  });
  return await newDevice.save();
}

async function updateDevice(deviceId, data) {
  console.log('update device', deviceId, data);
  const device = await Device.findById(deviceId).exec();

  if (!device) {
    return null
  }
  if (data.state) {
    await updateDeviceState(
      device.address,
      device.port,
      data.state
    );

    await logService.logState(deviceId, data.state);
  }
  await Device.findByIdAndUpdate(deviceId, data).exec();
}

async function updateDeviceState(address, port, state) {
  const command = state === 'off' ? 'Off' : 'On';
  const url = `http://${address}:${port}/cm?cmd=${command}`;
  await sendRequest(url);
}

module.exports = {
  getDevices,
  getDeviceById,
  addDevice,
  removeDevice,
  updateDevice,
};
