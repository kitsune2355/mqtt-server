const mqtt = require('mqtt'); //import library
const client = mqtt.connect(`mqtt://broker.hivemq.com:1883`); //create connection

const first = 'first';
const second = 'second';
client.on('connect', () => {
  console.log('Connected');

  client.subscribe(first);
  client.subscribe(second);
});
client.on('message', (topic, msg) => {
  if (topic === 'first' && msg.toString() === 'Installing') {
    client.publish(second, 'next');
    first_msg = msg.toString();
    console.log('Received Message 1:', first, msg.toString());
  }
  if (topic === 'second' && msg.toString() === 'Installing') {
    second_msg = msg.toString();
    console.log('Received Message 2:', second, msg.toString());
  }
});
