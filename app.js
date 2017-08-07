
'use strict';
const express             = require('express');
const bodyParser          = require('body-parser');
const app                 = express();
const ViberBot  = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
//const ViberApp  = require('./routes/viberbot.js')
const port = process.env.PORT || 5000;
const bot    = new ViberBot({
	authToken: "464b4b09d9312d68-f40d732c7a251e8c-223ffae9b84c06fe",
	name: "Chakri.com",
	avatar: "http://viber.com/avatar.jpg" // It is recommended to be 720x720, and no more than 100kb.
});

//app.use('/viber/webhook',bot.middleware());
app.use("/viber/webhook", bot.middleware()).listen(port, () => bot.setWebhook(process.env.NOW_URL || process.env.HEROKU_URL||WEB_URL));;

app.get('/viber/webhook',function (req,res){

    console.log ('test');
    console.log ('hello world');

 });




var WEB_URL='https://botmela.samuraigeeks.net/';



/*if (process.env.NOW_URL || process.env.HEROKU_URL || WEB_URL) {
    
    var http = require('http');
    var port = process.env.PORT || 5000;
    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(process.env.NOW_URL || process.env.HEROKU_URL||WEB_URL));
} else {
    //logger.debug('Could not find the now.sh/Heroku environment variables. Please make sure you followed readme guide.');
}*/








