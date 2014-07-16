var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    developers = {
        "shane-t" : "Shane T",
        "dkbyrne" : "Derek",
        "leanned91" : "Leanne",
        "cusackd" : "Dave C",
        "onlydave" : "Dave B",
        "davidkcyip" : "Yippo",
        "Viscacatalunya1" : "Marcus",
        "EvanB54" : "Evzo",
        "DaveTeeling" : "Teelo",
        "dmaloney92" : "Young maloney"
    };


app.use(bodyParser.json());

app.post('/', function (req, res) {
    var username = req.body.pusher.name,
        name = developers.hasOwnProperty(username) ? developers[username] : username;

    console.log(name);
    
    res.end();
});
app.get('/', function (req, res) {
    res.end("hi");
});

app.listen(12345);
