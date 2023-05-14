let words = {
    "rainbow": 5,
    "unicorn": 3,
    "hello": 2,
    "gloom": -1
}


console.log(`Node is running`);

var express = require('express');
var app = express();

var server = app.listen(3000, listening);


function listening(){
    console.log('listening');
}

app.use(express.static('public'));

app.get('/search/:flower/:num', function(req, res){
    let data = req.params;
    let num = data.num;

    let reply = "";

    for (let i = 0; i < num; i++){
        reply += "I love "+ data.flower+ " too \n";
    }
    res.send(reply);
})


app.get('/all', (req, res) => {
    res.send(words);
})


//add word to the json
app.get('/add/:word/:score?', (req, res) => {
    let data = req.params;
    let word = data.word;
    let score = Number(data.score);
    let reply = {};

    words[word] = score;

    if(!score){
        reply = {
            msg: "score is  required",
        }
    }
    else{
        reply = {
            msg:"Thank you so much for your word"
        }
    }

    res.send(reply);
})

app.get('/search/:word', (req, res) => {
    let word = req.params.word;
    let reply;

    if (words[word]){
        reply = {
            status:"found",
            word: word,
            score: words[word]
        }
    }
    else{
        reply = {
            status: "Not Found",
            word: word,
        }
    }

    return res.send(reply);

})
