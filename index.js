// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
const { response } = require('express');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/",function (req,res){
    let date = new Date();
    let UTC = date.toUTCString();
    let UNIX = date.getTime();
    res.json({ unix: UNIX, utc: UTC });
});

app.get("/api/:timestamp/",function (req,res){
  let timestamp = req.params.timestamp;
  if(timestamp.includes('-')){
    res.json({"unix": new Date(timestamp).getTime(),"utc": new Date(timestamp).toUTCString() });
  }else{
    let dateObject = new Date(timestamp);
    if (dateObject.toString() !== "Invalid Date") {
      res.json({ error: "Invalid Date" });
    } else {
      nd = parseInt(timestamp)
      res.json({error,"utc": new Date(nd).toUTCString() });
    }
  }
});



// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
