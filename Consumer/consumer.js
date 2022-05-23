const kafkaTopic = 'kafka-producer-consumer'

var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient(),
    consumer = new Consumer(
        client,
        [
            { topic: kafkaTopic, partition: 0 } 
        ],
        {
            autoCommit: false
        }
    );

    consumer.on('message', function (message) {
      console.log(message);
  });
  