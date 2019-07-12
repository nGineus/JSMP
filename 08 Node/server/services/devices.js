const Device = require('../models/devices');
const DeviceLog = require('../models/device.log');
const sendRequest = require('../utils/request');

function deviceAdapter(device) {
  const {_id, name, address, port, state} = device;
  return {
    id: _id, name, device, address, port, state
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


async function getDeviceLogById(deviceId) {
  return await DeviceLog.find({
    deviceId: deviceId
  }).select('-_id -__v -deviceId').exec();
}

async function removeDevice(deviceId) {
  await Device.findByIdAndDelete(deviceId).exec();
}

async function addDevice(device) {
  const newDevice = new Device({
    state: 'off',
    ...device
  });
  newDevice.save();
}

async function updateDevice(deviceId, data) {
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

    await logDeviceState(deviceId, data.state);
  }
  await Device.findByIdAndUpdate(deviceId, data).exec();
}

async function updateDeviceState(address, port, state) {
  const command = state === 'off' ? 'Off' : 'On';
  const url = `http://${address}:${port}/cm?cmd=${command}`;
  await sendRequest(url);
}

async function logDeviceState(deviceId, state) {
  const newDeviceLog = new DeviceLog({
    date: new Date().toLocaleString(),
    action: state === 'off' ? 'Off' : 'On',
    deviceId: deviceId
  });
  newDeviceLog.save();
}

module.exports = {
  getDevices,
  getDeviceById,
  addDevice,
  removeDevice,
  updateDevice,
  getDeviceLogById
};
