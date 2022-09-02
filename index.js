import express from 'express';

import longestWord from './bootcamp/longestWord.js'
import shortestWord from './bootcamp/shortestWord.js';
import wordLengths from './bootcamp/wordLengths.js';

import totalPhoneBill from './bootcamp/totalPhoneBill.js';

import enoughAirtime from './bootcamp/enoughAirtime.js';

const app = express();

app.use(express.static('public'));

app.get('/api/word_game', function(req, res){

    const sentence = req.query.sentence;

    if(!sentence) {
        res.json({
            error : 'Please send in sentence to analyse'
        })
    }
    res.json({
        "longestWord" : longestWord(sentence),
        "shortestWord" : shortestWord(sentence),
        "sum" : wordLengths(sentence)
    });
});


app.get('/api/phonebill/total', function(req, res){

    const bills = req.query.bills;

    if(!bills) {
        res.json({
            error : 'Please enter the data to analyse'
        })
    }
    res.json({
        "totalPhoneBill" : totalPhoneBill(bills),
    });
});

app.get('/api/phonebill/prices', function(req, res){

    const bills = req.query.bills;

    if(!bills) {
        res.json({
            error : 'Please enter the data to analyse'
        })
    }
    res.json({
        "calls" : totalPhoneBill(bills),
        "sms" : totalPhoneBill(bills),

    });
});



app.post('api/enough', function(req, res){

    const bills = req.body.bills;
    

    if(!bills) {
        res.json({
            error : 'Please enter the data to analyse'
        })
    }
    res.json({
        "enoughAirtime" : enoughAirtime(usage, amount),
    });
});



const PORT = process.env.PORT || 6007;
app.listen(PORT, function(){
    console.log('App starting on port', PORT);
  });