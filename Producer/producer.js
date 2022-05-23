'use strict';

const readline = require('readline')
const fs = require('fs')
const Transform = require('stream').Transform;
const ProducerStream = require('./lib/producerStream')
const _ = require('lodash')
const kafkaTopic = 'kafka-producer-consumer'
const producer = new ProducerStream()

var stdinTransform = new Transform({
  objectMode: true,
  decodeStrings: true,
  transform (text, encoding, callback) {
    text = _.trim(text);
    console.log(`pushing message ${text} to ExampleTopic`);
    callback(null, {
      topic: kafkaTopic,
      messages: text
    });
  }
});

process.stdin.setEncoding('utf8');
process.stdin.pipe(stdinTransform).pipe(producer);