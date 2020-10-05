const fs = require('fs');
const path = require('path');

function validateShift(shift) {
  if (!shift) {
    process.stderr.write('Shift Error: Please specify your shift');
    process.exit(1);
  }

  const shiftNumber = Number(shift);

  if (!Number.isInteger(shiftNumber)) {
    process.stderr.write('Shift Error: Shift should be an integer number');
    process.exit(1);
  }

  return shiftNumber * Math.sign(shift);
}

function validateAction(action) {
  if (!action) {
    process.stderr.write('Action Error: Please specify your action');
    process.exit(1);
  }

  if (action === 'encode' || action === 'decode') {
    return action;
  }

  process.stderr.write(
    'Action Error: Please choose your action between encode and decode'
  );
  process.exit(1);
}

function validateInput(optionsInput) {
  return new Promise((resolve, reject) => {
    if (!optionsInput) resolve(false);

    const input = path.resolve(__dirname, '..', optionsInput);

    fs.access(input, fs.constants.F_OK | fs.constants.R_OK, (error) => {
      if (error) {
        process.stderr.write(
          'Input Error: no such file or no access to the file.'
        );
        process.exit(1);
      }

      resolve(true);
    });
  });
}

function validateOutput(optionsOutput) {
  return new Promise((resolve, reject) => {
    if (!optionsOutput) resolve(false);

    const output = path.resolve(__dirname, '..', optionsOutput);

    fs.access(output, fs.constants.F_OK | fs.constants.W_OK, (error) => {
      if (error) {
        process.stderr.write(
          'Output Error: no such file or no access to the file.'
        );
        process.exit(1);
      }

      resolve(true);
    });
  });
}

module.exports.validateInput = validateInput;
module.exports.validateAction = validateAction;
module.exports.validateOutput = validateOutput;
module.exports.validateShift = validateShift;
