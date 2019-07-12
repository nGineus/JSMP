const express = require('express');
const app = express();

const PORT = process.argv[2];

const COMMANDS = {
  'Power TOGGLE': 'toggle',
  'Power On': 'on',
  'Power off': 'off'
};

let deviceState = 'off';

app.get('/cm', (req, res) => {
  const command = COMMANDS[req.query.cmd];
  if (command === 'on') {
    deviceState = 'on';
  } else if (command === 'off') {
    deviceState = 'off';
  } else if (command === 'toggle') {
    deviceState = deviceState === 'on' ? 'off' : 'on';
  }

  res.send(deviceState);
  console.log('Received command ', deviceState);
});

app.listen(PORT, () => {
  console.log('Start Fake Server on port ', PORT);
});
