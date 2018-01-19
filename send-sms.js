require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

let sampleMessages = [
  "\"What you seek is seeking you\". -Rumi",
  "\"Define success on your own terms, achieve it by your own rules, and build a life you’re proud to live.\" -Anne Sweeney",
  "\"The journey of a thousand miles begins with a single step.\" -Lao Tzu",
  "\"Don't envy what people have, emulate what they did to have it.\" -Tim Fargo",
  "\"It's not what happens to you, but how you react to it that matters.\" -Epictetus",
  "\"Success isn't about being the best. It's about always getting better.\" -Behance 99u",
  "\"We are what we repeatedly do. Excellence then, is not an act, but a habit.\" -Aristotle"
];

  var randomIndex = Math.floor(Math.random() * sampleMessages.length);
  var randomMessage = sampleMessages[randomIndex];

client.messages.create({
  to: process.env.MY_PHONE_NUMBER,
  from: '+15102395031',
  body: "Today's Quote: " + randomMessage
})

.then((message) => console.log(message.sid));
