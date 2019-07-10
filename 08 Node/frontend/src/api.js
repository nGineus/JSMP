import axios from 'axios';

const API_URL = 'http://localhost:4000';
//
// let index = 3;
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

export async function getDevices() {
  const response = await axios.get(`${API_URL}/devices`);
  return response.data;

}

export async function getDeviceById(deviceId) {
  const response = await axios.get(`${API_URL}/devices/${deviceId}`);
  return response.data;
}

export async function addDevice(device) {
  const response = await axios.post(`${API_URL}/devices`, device);
  // index += 1;
  // devices[index] = {
  //   id: index,
  //   state: 'off',
  //   ...device
  // };
}

export async function removeDevice(deviceId) {
  const response = await axios.delete(`${API_URL}/devices/${deviceId}`);
  return response.data;
}

export async function updateDevice(deviceId, data) {
  const response = await axios.patch(`${API_URL}/devices/${deviceId}`, data);
  return response.data;
}

export async function switchOn(deviceId) {
  await updateDevice(deviceId, {
    state: 'on'
  });
}

export async function switchOff(deviceId) {
  await updateDevice(deviceId, {
    state: 'off'
  });
}

export async function getDeviceLog(deviceId) {
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
