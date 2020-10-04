const { pipeline } = require('stream');
const { promisify } = require('util');
const pipelineAsync = promisify(pipeline);
const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const { Transform } = require('stream');

const {
  validateShift,
  validateAction,
  validateInput,
  validateOutput,
} = require('./utils/validate');

program
  .storeOptionsAsProperties(false)
  .version('1.0.0')
  .description('Caesar Cipher CLI');

program
  .option('-a, --action <action>', 'choose between encode or decode')
  .option('-s, --shift <shift>', 'specify your shift')
  .option('-i, --input <input>', 'specify your input file')
  .option('-o, --output <output>', 'specify your output file')
  .parse(process.argv);

const programOptions = program.opts();

const inputData = programOptions.input
  ? path.join(__dirname, programOptions.input)
  : null;

const outputData = programOptions.output
  ? path.join(__dirname, programOptions.output)
  : null;

const shift = validateShift(programOptions.shift);
const action = validateAction(programOptions.action);

(async function run() {
  const readStream = (await validateInput(programOptions.input))
    ? fs.createReadStream(inputData, {
        encoding: 'utf8',
      })
    : null;

  const transformStream = new Transform({
    transform(chunk, encoding, done) {
      let text = chunk.toString('utf8');
      let result = '';

      if (action === 'encode') {
       // result = encode(text, shift);
      }

      if (action === 'decode') {
       // result = decode(text, shift);
      }

      this.push(`${result}\n`);
      done();
    },
  });

  const writeStream = (await validateOutput(programOptions.output))
    ? fs.createWriteStream(outputData, { flags: 'a+' })
    : process.stdout;

  try {
    await pipelineAsync(
      readStream || process.stdin,
      transformStream,
      writeStream || process.stdout
    );
  } catch (error) {
    process.stderr.write(error.message + '\n');
  }
})();
