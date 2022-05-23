const readline = require('readline')
const fs = require('fs')

//Security credentials and mechanism - unused for the purpose of this POC
const { KAFKA_USERNAME: username, KAFKA_PASSWORD: password } = process.env
const sasl = username && password ? { username, password, mechanism: 'plain' } : null
const ssl = !!sasl


// This creates a client instance that is configured to connect to the Kafka broker provided by
// the environment variable KAFKA_BOOTSTRAP_SERVER
const kafka = new Kafka({
  clientId: 'npm-slack-notifier',
  brokers: [process.env.KAFKA_BOOTSTRAP_SERVER]
})


//Get messages to send to Kafka (using bundled sql dump file for POC)
allFileContents = fs.readFileSync('broadband-plans.sql', 'utf-')

Producer = kafka.producer()
producer.connect()

client = new kafka.KafkaClient(),
producer = new Producer(client);

allFileContents.split(/\r?\n/).forEach(line => {
     let payload = [
          {
            topic: kafkaTopic,
            messages: line,
          }
        ];
        producer.send(payload, err, data);
      })
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log('memory used: $used')

producer.on('error', (err) => {
  console.log(err);
})

producer.disconnect()