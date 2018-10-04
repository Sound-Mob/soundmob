const express = require('express');
const app = express();
var http = require('http').Server(app);
// replace these values with those generated in your TokBox Account
var apiKey = "46194612";
var sessionId = "2_MX40NjE5NDYxMn5-MTUzODY2NzQxMDczNn5lWFR6MGU0bWRMYXN6UlFQd3NYeGFNSmV-fg";
var token = "T1==cGFydG5lcl9pZD00NjE5NDYxMiZzaWc9NmQ2NDE1MWQxMGU4MDdhNTYyNWY0YjNkOWI5NTdkY2Q5OTQyZDI3NDpzZXNzaW9uX2lkPTJfTVg0ME5qRTVORFl4TW41LU1UVXpPRFkyTnpReE1EY3pObjVsV0ZSNk1HVTBiV1JNWVhONlVsRlFkM05ZZUdGTlNtVi1mZyZjcmVhdGVfdGltZT0xNTM4NjY3NDM2Jm5vbmNlPTAuOTgyMDc4NzkzNjM0OTg3MyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTQxMjU5NDM1JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// (optional) add server code here
initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function (event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function (error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}

app.get('/', function (req, res) {
  res.sendFile(__dirname + './tok.html');
});

http.listen(5678, function () {
  console.log('listening on 5678');
});