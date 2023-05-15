import { readFileSync, writeFile } from 'fs';

import express from 'express';

const app = express();

app.listen(3000);
var data = readFileSync("./words.json");
const words = JSON.parse(data);

console.log(words)

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

    if(!score){
        reply = {
            msg: "score is  required",
        }
    }
    else{
        words[word] = score;
        let data = JSON.stringify(words);
        writeFile('words.json', data, (err) => {console.log(err)});
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
