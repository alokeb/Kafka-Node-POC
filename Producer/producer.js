'use strict';

const readline = require('readline')
const fs = require('fs')
const kafkaTopic = 'kafka-producer-consumer'

var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.KafkaClient(),
    producer = new Producer(client);

   /*
   {

   Here's the kafka message example

   topic: 'topicName',
   messages: ['message body'], // multi messages should be a array, single message can be just a string or a KeyedMessage instance
   key: 'theKey', // string or buffer, only needed when using keyed partitioner
   partition: 0, // default 0
   attributes: 2, // default: 0
   timestamp: Date.now() // <-- defaults to Date.now() (only available with kafka v0.10+)
}
*/


//Get messages to send to Kafka (using bundled sql dump file for POC)
let allFileContents = fs.readFileSync('broadband-plans.sql', 'utf-8')

client = new kafka.KafkaClient(),
producer = new Producer(client);

allFileContents.split(/\r?\n/).forEach(line => {
     let payload = [
          {
            topic: kafkaTopic,
            messages: line,
          }
        ];
        producer.on('ready', function () {
          producer.send(payload);
          const used = process.memoryUsage().heapUsed / 1024 / 1024;
          console.log('memory used: $used')
        })
      })