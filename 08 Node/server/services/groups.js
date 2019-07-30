const Group = require('../models/group');
const Device = require('../models/devices');

const logService = require('../services/logService');
const deviceService = require('../services/devices');

function groupAdapter(group) {
  const {_id, name, devices, state} = group;
  return {
    id: _id, name, devices, state
  };
}

async function getGroups() {
  const group = await Group
    .find()
    .exec();
  return group.map(groupAdapter);
}

async function getGroupById(groupId) {
  const group = await Group.findById(groupId).exec();
  let devices = [];

  for await (let deviceId of group.devices) {
    devices.push(await deviceService.getDeviceById(deviceId));
  }
  group.devices = devices;
  return groupAdapter(group);
}

async function removeGroup(groupId) {
  await Group.findByIdAndDelete(groupId).exec();
}

async function createGroup(group) {
  const newGroup = new Group({
    state: 'off',
    devices: [],
    ...group
  });
  newGroup.save();
}

async function updateGroup(groupId, data) {
  const group = await Group.findById(groupId).exec();
  if (!group) {
    return null
  }

  if (data.state) {
    group.devices.forEach(async (device) => {

      await deviceService.updateDevice(
        device,
        {
          state: data.state
        }
      );
    });

    await logService.logState(groupId, data.state);
  }
  await Group.findByIdAndUpdate(groupId, data);
}

async function addDeviceToGroup(groupId, data) {
  const group = await Group.findById(groupId).exec();
  if (!group) {
    return null
  }

  const device = await deviceService.addDevice({
    ...data,
    groupId: groupId
  });
  await deviceService.updateDevice(device._id, {state: group.state});

  group.devices.push(device._id);

  await Group.findByIdAndUpdate(groupId, group);
}

async function removeDeviceFromGroup(groupId, deviceId) {
  const group = await Group.findById(groupId).exec();
  if (!group) {
    return null
  }

  group.devices = group.devices.filter(device => device._id !== deviceId);

  await Group.findByIdAndUpdate(groupId, group);
}

module.exports = {
  getGroups,
  getGroupById,
  createGroup,
  removeGroup,
  updateGroup,
  addDeviceToGroup,
  removeDeviceFromGroup
};
