const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const endpointsFile = path.resolve(__dirname, '../testdata/endpoint.yml');

try {
  const fileContents = fs.readFileSync(endpointsFile, 'utf8');
  const endpoints = yaml.load(fileContents);
  module.exports = { endpoints };
} catch (e) {
  console.error(`Error reading YAML file: ${e}`);
  module.exports = { endpoints: null };
}
