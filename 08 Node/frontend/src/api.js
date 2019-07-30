import axios from 'axios';

const API_URL = 'http://localhost:4000';

// Groups API

export async function getGroups() {
  const response = await axios.get(`${API_URL}/groups`);
  return response.data;
}

export async function getGroupById(groupId) {
  const response = await axios.get(`${API_URL}/groups/${groupId}`);
  return response.data;
}

export async function createGroup(group) {
  await axios.post(`${API_URL}/groups`, group);
}

export async function removeGroup(groupId) {
  const response = await axios.delete(`${API_URL}/groups/${groupId}`);
  return response.data;
}

export async function updateGroup(groupId, data) {
  const response = await axios.patch(`${API_URL}/groups/${groupId}`, data);
  return response.data;
}

export async function switchGroupDevicesOn(group) {
  await updateGroup(group.id, {state: 'on'});
}

export async function switchGroupDevicesOff(group) {
  await updateGroup(group.id, {state: 'off'});
}

export async function getGroupLog(groupId) {
  const response = await axios.get(`${API_URL}/groups/log/${groupId}`);
  return response.data;
}

// Devices API

export async function getDevices() {
  const response = await axios.get(`${API_URL}/devices`);
  return response.data;

}

export async function getDeviceById(deviceId) {
  const response = await axios.get(`${API_URL}/devices/${deviceId}`);
  return response.data;
}

export async function addDevice(device, groupId = null) {
  if (groupId) {
    await axios.post(`${API_URL}/groups/add/${groupId}`, device);
  } else {
    await axios.post(`${API_URL}/devices`, device);

  }
}

export async function removeDevice(deviceId, groupId = null) {
  const requestString = `${API_URL}/devices/${deviceId}${groupId ? '/'+ groupId : ''}`;
  const response = await axios.delete(requestString);
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
  const response = await axios.get(`${API_URL}/devices/log/${deviceId}`);
  return response.data;
}
