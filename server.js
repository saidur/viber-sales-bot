'use strict';
// express
const express           = require('express');
const bodyParser        = require('body-parser');
const app               = express();

// viber bot 

const ViberBot          = require('viber-bot').Bot;
const BotEvents         = require('viber-bot').Events;
const TextMessage       = require('viber-bot').Message.Text;
const winston           = require('winston');
const toYAML            = require('winston-console-formatter');
const UrlMessage        = require('viber-bot').Message.Url;
const ContactMessage    = require('viber-bot').Message.Contact;
const PictureMessage    = require('viber-bot').Message.Picture;
const VideoMessage      = require('viber-bot').Message.Video;
const LocationMessage   = require('viber-bot').Message.Location;
const StickerMessage    = require('viber-bot').Message.Sticker;
const RichMediaMessage  = require('viber-bot').Message.RichMedia;
const KeyboardMessage   = require('viber-bot').Message.Keyboard;
const URL               = require('url');

// nlp 
const natural           = require('natural');
const stemmer           = natural.PorterStemmer;

function createLogger() 
{
    const logger = new winston.Logger({
        level: "debug" // We recommend using the debug level for development
    });

    logger.add(winston.transports.Console, toYAML.config());
    return logger;
}
// logger 
const logger            = createLogger();

const VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY ="464b4b09d9312d68-f40d732c7a251e8c-223ffae9b84c06fe";


var request = require('request');
var http = require('http');
//var index = require('../routes/   ');


// Creating the bot with access token, name and avatar
const bot = new ViberBot(logger, {
    authToken: VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY, // Learn how to get your access token at developers.viber.com
    name: "Chakri",
    avatar: "https://raw.githubusercontent.com/devrelv/drop/master/151-icon.png" // Just a placeholder avatar to display the user
});

const webhookUrl='https://botmela.samuraigeek.net';
app.use("/viber/webhook", bot.middleware()).listen(5000, () => bot.setWebhook(webhookUrl));
//https.createServer(httpsOptions, bot.middleware()).listen(port, () => bot.setWebhook(webhookUrl));

app.post('/viber/webhook',function(req,res,next){ 

    console.log('Time: %d', Date.now());

});

app.use(function (req, res, next) {
  console.log('Time: %d', Date.now());
  next();
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});









//app.use("/viber/webhook", bot.middleware());




