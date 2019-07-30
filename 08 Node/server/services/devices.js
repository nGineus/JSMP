const Device = require('../models/devices');
const Group = require('../models/group');
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
  const device = await Device.findById(deviceId).exec();
  await Device.findByIdAndDelete(deviceId).exec();
  if (device.groupId) {
    await removeDeviceFromGroup(device.groupId, deviceId);
  }
}

async function addDevice(device) {
  const newDevice = new Device({
    state: 'off',
    ...device
  });
  return await newDevice.save();
}

async function removeDeviceFromGroup(groupId, deviceId) {
  const group = await Group.findById(groupId).exec();
  if (!group) {
    return null
  }
  group.devices = group.devices.filter(device => device !== deviceId);
  await Group.findByIdAndUpdate(groupId, group);
}

async function updateDevice(deviceId, data) {
  const device = await Device.findById(deviceId).exec();

  if (!device) {
    return null
  }
  if (data.state) {
    if (await updateDeviceState(
      device.address,
      device.port,
      data.state
    )) {
      await logService.logState(deviceId, data.state);
    }
  }
  await Device.findByIdAndUpdate(deviceId, data).exec();
}

async function updateDeviceState(address, port, state) {
  const command = state === 'off' ? 'Power Off' : 'Power On';
  const url = `http://${address}:${port}/cm?cmd=${command}`;
  try {
    await sendRequest(url);
  } catch (e) {
    return false;
  }
  return true;
}

module.exports = {
  getDevices,
  getDeviceById,
  addDevice,
  removeDevice,
  updateDevice,
};
