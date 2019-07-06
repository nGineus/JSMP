const Device = require('../models/devices');
const sendRequest = require('../utils/request');
// let index = 3;
//
// let devices = {
//   device1: {
//     id: 'device1',
//     name: 'Device #1',
//     address: '192.168.1.50',
//     port: 90,
//     state: 'on'
//   },
//   device2: {
//     id: 'device2',
//     name: 'Device #2',
//     address: '192.168.1.60',
//     port: 80,
//     state: 'off'
//   }
// };

function deviceAdapter(device) {
  const {_id, name, address, port, state} = device;
  return {
    id: _id, name, device, address, port, state
  };
}

async function getDevices() {
  const devices = await Device.find({}).exec();
  return devices.map(deviceAdapter);
}

async function getDeviceById(deviceId) {
  const device = await Device.findById(deviceId).exec();
  return deviceAdapter(device);
}


async function getDeviceLog(deviceId) {
  return [
    {
      date: '2018-31-08 16:00:00',
      action: 'On'
    },
    {
      date: '2018-31-08 17:00:00',
      action: 'Off'
    }]
}

async function removeDevice(deviceId) {
  console.log('Remove device', deviceId);

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
  console.log('Update device', deviceId, data);
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
  }

  await Device.findByIdAndUpdate(deviceId, data).exec();

}

async function updateDeviceState(address, port, state) {
  const command = state === 'off' ? 'Power off' : 'Power On';

  const url = `http://${address}:${port}/cm?cmd=${command}`;
  await sendRequest(url);
}

module.exports = {
  getDevices,
  getDeviceById,
  addDevice,
  removeDevice,
  updateDevice,
  getDeviceLog
};
