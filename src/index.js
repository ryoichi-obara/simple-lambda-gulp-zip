const AWS = require('aws-sdk');
const moment = require('moment');

exports.handler = (event, context, callback) => {
  console.log(new moment());
  context.done(null, 'Success');
};
