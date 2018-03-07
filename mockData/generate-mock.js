/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

const jsf = require('json-schema-faker');
const mockDataSchema = require('./schema');
const fs = require('fs');

const json = JSON.stringify(jsf(mockDataSchema));

fs.writeFile("mockData/db.json", json, function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Mock data generated.");
  }
});
