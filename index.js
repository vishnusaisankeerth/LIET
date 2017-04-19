const LIET = require('./src/LIET.js');

const deviceId = '/dev/cu.wchusbserial1410';
const baudRate = 57600;

const liet = new LIET(deviceId, baudRate);

// liet.sendInstruction("Hello World");

