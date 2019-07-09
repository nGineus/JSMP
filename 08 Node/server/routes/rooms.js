const express = require('express');

const deviceService = require('../services/rooms');

const router = express.Router();

router.get('/', async (req, res) => {
  let devices = await deviceService.getDevices();
  res.json(devices);
});

router.post('/', async (req, res) => {
  let {name, address, port} = req.body;
  await deviceService.addDevice({name, address, port});
  res.sendStatus(201);
});

router.patch('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    await deviceService.updateDevice(id, req.body);
    res.sendStatus(200);
  } catch {
    res.sendStatus(404);
  }
});

router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  await deviceService.removeDevice(id);
  res.sendStatus(200);
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const device = await deviceService.getDeviceById(id);

  if (device) {
    res.json(device);
  } else {
    res.sendStatus(404);
  }
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const device = await deviceService.getDeviceLog(id);

  if (device) {
    res.json(device);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
