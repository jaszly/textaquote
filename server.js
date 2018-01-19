const http = require('http');
const express = require('express');
const MessageResponse = require('twilio').twiml.MessageResponse;

const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessageResponse();

  twiml.message('Another test');

  res.writeHead(200, {'Content-Type' : text/xml});
  res.end(twiml.toString());
});

http.createServer(app).listen(3000, () => {
  console.log('Express server on port 3000')
})
