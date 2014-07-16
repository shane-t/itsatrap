var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    say = require('say'),
    util = require('util'),
    developers = {
        "shane-t" : "Shane Tee",
        "dkbyrne" : "Derek",
        "leanned91" : "Leanne",
        "cusackd" : "Dave C",
        "onlydave" : "Dave B",
        "davidkcyip" : "Yippo",
        "Viscacatalunya1" : "Marcus",
        "EvanB54" : "Evzo",
        "DaveTeeling" : "Teelo",
        "dmaloney92" : "Young maloney"
    },
    sentences = [
      "Another amazing commit from %s.",
      "good work %s.",
      "obviously %s is doing a bit of work today.",
      "stunning vertical, %s.",
      "hey %s, you call that a commit?",
      "my name is %s and I'm here to say",
      "on a scale of one to %s, how cool is %s?",
      "Guess who's pregnant again! That's right, %s.",
      "Do you reckon %s sometimes covers themselves in vaseline and slithers around the house pretending to be a slug?",
      "Its never too late for %s.",
      "You can't hear %s because they're not saying anything.",
      "A group of %s is called a chowder.",
      "Approximately 40,000 people are bitten by %s in the U.S. annually.",
      "%s can jump up to five times their own height in a single bound.",
      "Most of the time, %s gives birth to a litter of between one and nine kittens.",
      "%s commited some code, and you won't believe what happened.",
      "%s just added a new bug.",
      "41 GIFs That Prove %s And Your Mother Are The Same Person.",
      "The 3 commits That Prove %s Has a Heart Of Gold.",
      "30 Painful Truths Only %s Will Understand",
      "As if you needed a reason to fall in love with %s.",
      "If %s is made illegal, a black market will spring up.",
      "Sometimes I think %s is too clever for their own good.",
      "This commit from %s will change your life"
    ];
      

app.use(bodyParser.json());

app.post('/', function (req, res) {
    var username = req.body.pusher.name,
        commitMessage = req.body.head_commit.message,
        name = developers.hasOwnProperty(username) ? developers[username] : username;

    report(name, commitMessage);
    res.end("We're done here.");
});

app.get('/', function (req, res) {
  say.speak("voice_default", "You didn't say the magic word");
  res.end("You didn't say the magic word");
});

function report (name, message) {
  var len = sentences.length - 1,
      index = Math.floor(Math.random()*len),
      sentence = sentences[index];

  utterance = util.format(sentence, name) + " commit message : " + message;

  console.log(utterance);

  say.speak('voice_default', utterance);
  
}

app.listen(12345);
