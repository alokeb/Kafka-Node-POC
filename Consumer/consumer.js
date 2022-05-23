const kafka = require('kafka-node');
const express = require('express');
const port = 3000;
const app = express();

const Consumer = kafka.Consumer,
 client = new kafka.KafkaClient('localhost:9092'),
 consumer = new Consumer(
 client, [ { topic: 'kafka-producer-consumer', partition: 0 } ], { autoCommit: false });

const consumerGroup = new ConsumerGroupStream(consumerOptions, 'ExampleTopic');
 
const messageTransform = new Transform({
  objectMode: true,
  decodeStrings: true,
  transform (message, encoding, callback) {
    console.log(`Received message ${message.value} transforming input`);
    callback(null, {
      topic: 'RebalanceTopic',
      messages: `You have been (${message.value}) made an example of`
    });
  }
});

io.on('connection', client => {
  console.log('Connected', client);

consumer.on('message', function (message) {
    client.emit('request', message.value);
  });

client.on('disconnect', () => { 
    console.log('Client disconnected');
 });
});