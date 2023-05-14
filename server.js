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

