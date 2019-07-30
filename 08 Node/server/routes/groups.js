const express = require('express');

const groupService = require('../services/groups');
const logService = require('../services/logService');

const router = express.Router();

router.get('/', async (req, res) => {
  let groups = await groupService.getGroups();
  res.json(groups);
});

router.post('/', async (req, res) => {
  let {name, address, port} = req.body;
  await groupService.createGroup({name, address, port});
  res.sendStatus(201);
});

router.post('/add/:id', async (req, res) => {
  let {name, address, port} = req.body;
  await groupService.addDeviceToGroup(req.params.id, {name, address, port});
  res.sendStatus(201);
});

router.patch('/:id', async (req, res) => {
  try {
    await groupService.updateGroup(req.params.id, req.body);
    res.sendStatus(200);
  } catch {
    res.sendStatus(404);
  }
});

router.delete('/:id', async (req, res) => {
  console.log('DELETING GROUP:', req.params.id);
  try {
    await groupService.removeGroup(req.params.id);
    res.sendStatus(200);
  } catch {
    res.sendStatus(404);
  }
});

router.delete('/:id/:deviceId', async (req, res) => {
  console.log('DELETING DEVICE FROM GROUP:', req.params.id, req.params.deviceId);
  try {
    await groupService.removeDeviceFromGroup(req.params.id, req.params.deviceId);
    res.sendStatus(200);
  } catch {
    res.sendStatus(404);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const device = await groupService.getGroupById(req.params.id);
    if (device) {
      res.json(device);
    } else {
      res.sendStatus(404);
    }
  } catch {
    res.sendStatus(404);
  }

});

router.get('/log/:id', async (req, res) => {
  const {id} = req.params;
  const log = await logService.getLogById(id);

  if (log) {
    res.json(log);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
