'use strict';
const express           = require('express');
const bodyParser        = require('body-parser');
const app               = express();
const viberApp          = express();

const natural           = require('natural');

// Bring in our dependencies
//const app               = require('../app');
//const routes            = require('../routes');
//const env               = require('../env.json');
// remove const
// viber
const ViberBot          = require('viber-bot').Bot;
const BotEvents         = require('viber-bot').Events;
const TextMessage       = require('viber-bot').Message.Text;
const UrlMessage        = require('viber-bot').Message.Url;
const ContactMessage    = require('viber-bot').Message.Contact;
const PictureMessage    = require('viber-bot').Message.Picture;
const VideoMessage      = require('viber-bot').Message.Video;
const LocationMessage   = require('viber-bot').Message.Location;
const StickerMessage    = require('viber-bot').Message.Sticker;
const RichMediaMessage  = require('viber-bot').Message.RichMedia;
const KeyboardMessage   = require('viber-bot').Message.Keyboard;



const URL               = require('url');
const natural           = require('natural');
const winston           = require('winston');
const toYAML            = require('winston-console-formatter');

const stemmer           = natural.PorterStemmer;
const logger            = createLogger();
const VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY ="464b4b09d9312d68-f40d732c7a251e8c-223ffae9b84c06fe";

const SAMPLE_KEYBOARD = {
    "Type": "keyboard",
    "Revision": 1,
    "Buttons": [
        {
            "Columns": 1,
            "Rows": 1,
            "BgColor": "#e6f5ff",
           // "BgMedia": "http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg",
           // "BgMediaType": "picture",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "Accounting",
            "Text":"Accounting / Finance",
            "TextVAlign": "middle",
            "TextHAlign": "center",
            "TextOpacity": 60,
            "TextSize": "regular"
        },
        {
            "Columns": 1,
            "Rows": 1,
            "BgColor": "#e6f5ff",
           // "BgMedia": "http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg",
           // "BgMediaType": "picture",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "Agro",
            "Text":"Agro (Plant / Animal / Fisheries)",
            "TextVAlign": "middle",
            "TextHAlign": "center",
            "TextOpacity": 60,
            "TextSize": "regular"
        },
        {
            "Columns": 1,
            "Rows": 1,
            "BgColor": "#e6f5ff",
           // "BgMedia": "http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg",
           // "BgMediaType": "picture",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "Bank",
            "Text":"Bank",
            "TextVAlign": "middle",
            "TextHAlign": "center",
            "TextOpacity": 60,
            "TextSize": "regular"
        },
        {
            "Columns": 1,
            "Rows": 1,
            "BgColor": "#e6f5ff",
           // "BgMedia": "http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg",
           // "BgMediaType": "picture",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "Beauty Care",
            "Text":"Beauty Care",
            "TextVAlign": "middle",
            "TextHAlign": "center",
            "TextOpacity": 60,
            "TextSize": "regular"
        },
        {
            "Columns": 1,
            "Rows": 1,
            "BgColor": "#e6f5ff",
           // "BgMedia": "http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg",
           // "BgMediaType": "picture",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "Commercial",
            "Text":"Commercial",
            "TextVAlign": "middle",
            "TextHAlign": "center",
            "TextOpacity": 60,
            "TextSize": "regular"
        },
        {
            "Columns": 1,
            "Rows": 1,
            "BgColor": "#e6f5ff",
           // "BgMedia": "http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg",
           // "BgMediaType": "picture",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "Customer Support",
            "Text":"Customer Support",
            "TextVAlign": "middle",
            "TextHAlign": "center",
            "TextOpacity": 60,
            "TextSize": "regular"
        },
        {
            "Columns": 1,
            "Rows": 1,
            "BgColor": "#e6f5ff",
           // "BgMedia": "http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg",
           // "BgMediaType": "picture",
            "BgLoop": true,
            "ActionType": "reply",
            "ActionBody": "Data Entry",
            "Text":"Data Entry",
            "TextVAlign": "middle",
            "TextHAlign": "center",
            "TextOpacity": 60,
            "TextSize": "regular"
        }
    ]
};

// logger
var request = require('request');
var http = require('http');

// Creating the bot with access token, name and avatar
const bot = new ViberBot(logger, {
    authToken: VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY, // Learn how to get your access token at developers.viber.com
    name: "Chakri",
    avatar: "https://raw.githubusercontent.com/devrelv/drop/master/151-icon.png" // Just a placeholder avatar to display the user
});
var index = require('../routes/index');




viberApp.get('/', function (req, res) {
    console.log(viberApp.mountpath); // /admin
    res.send('Viber Homepage');
  });


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/viberbot";



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  
  var myobj = [
    { viber_id: '1', mobile: '01673615816',status:'yes'}
   
  ];
  /*db.collection("users").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });*/
});


//app.use('/index', index);
// log file 

function createLogger() 
{
    const logger = new winston.Logger({
        level: "debug" // We recommend using the debug level for development
    });

    logger.add(winston.transports.Console, toYAML.config());
    return logger;
}

function say(response, message) {

    console.log ('keyboard setup ');
   
    response.send(new TextMessage(message,SAMPLE_KEYBOARD));
}

function jobRichMessage(response, message) {
    
    console.log ('rich message' + message);
    //response.send(new RichMediaMessage (message));
    const SAMPLE_RICH_MEDIA = {
        "ButtonsGroupColumns": 6,
        "ButtonsGroupRows": 2,
        "BgColor": "#FFFFFF",
        "Buttons": message
    };

    
    
    
    const message_new = new RichMediaMessage(SAMPLE_RICH_MEDIA,SAMPLE_KEYBOARD);
    response.send(message_new);

}

function jobMessage (response,message) {
    
    response.send(new  UrlMessage(message));
}

/*
    * api send 
*/

function apiSend(botResponse,category) {

    var queryUrl = "http://www.chakri.com/chkapi/rest/jobnotification?category_name="+category+"&key=16486";
    
    var url = queryUrl;
    
    http.get(url, function(res){
            
            var body = '';
            
            res.on('data', function(chunk){
                body += chunk;
            });

            res.on('end', function(){
                logger.debug(body);
                var jobResponse = JSON.parse(body);
                logger.debug(jobResponse);
                var viberButtons =[];
                var jobElements ;

                for (var i=0; i<jobResponse.data.length; i++){
                    
                    var id = JSON.stringify(jobResponse.data[i].id);
                    var job_title = JSON.stringify(jobResponse.data[i].job_title);
                    var category = JSON.stringify(jobResponse.data[i].category);
                    var item_url = JSON.stringify(jobResponse.data[i].item_url);
                    console.log("Got a response: ", item_url);
                     jobElements =  {
                            "ActionBody" : item_url,
                            "ActionType" : "open-url",
                            "BgColor": "#85bb65",
                            "Text": job_title,
                            "TextOpacity": 60,
                            "Rows": 1,
                            "Columns": 6
                    };

                    viberButtons.push(jobElements);

                
                logger.debug("my element" + jobElements );
            }  

            logger.debug("botResponse" + botResponse.length);
            if ( viberButtons.length > 0 )
               { 

                    jobRichMessage(botResponse,viberButtons);
               }else {
                      say(botResponse,' Sorry Nothing match jobs not found . Please try with another category');

               }


             //jobMessage(botResponse, myelement);
            
            });
        }).on('error', function(e){
            console.log("Got an error: ", e);
    });


 
};

function findJobs (botResponse,jobCategory)
{
     if (jobCategory === '') {
        say(botResponse, 'I need a Job Category to give you results.  like : IT , Bank , Accounting .. etc');
        return;
    } 

    say(botResponse, 'One second...Let me find out the results!');

    apiSend(botResponse,jobCategory);
    
}

/*app.get('/',    function (req, res) {
  res.send('Hello from A!')
});
*/

app.post('/joboffer', function (req, res) {
  //res.send('Hello from A!')
  var response = 
    { 
      id: response.userProfile.id, 
      name: response.userProfile.name,
      avatar:response.userProfile.avatar,
      country:response.userProfile.country,
      language:response.userProfile.language
      
    }  
    
    bot.sendMessage(userProfile, new TextMessage("Thanks for shopping with us"));

});

function ValidURL(str) {
    var pattern = new RegExp('^(http?:\/\/)?'+ // protocol
      '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
      '(\?[;&a-z\d%_.~+=-]*)?'+ // query string
      '(\#[-a-z\d_]*)?$','i'); // fragment locater
    if(!pattern.test(str)) {
          return false;
    } else {
      return true;
    }
  }




if (!VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY) {
    logger.debug('Could not find the Viber Public Account access token key in your environment variable. Please make sure you followed readme guide.');
    return;
}


//app.use("/viber/webhook", bot.middleware());

app.get('/viber/public', function (req, res) {

        
        var contactName ='Saidur Rahman';
        var contactPhoneNumber='+8801779253539';
        const message = new ContactMessage(contactName, contactPhoneNumber);
        console.log(`${message.contactName}, ${message.contactPhoneNumber}`);
        bot.getBotProfile().then(response => console.log(`Public Account Named: ${response.name}`));

    });


// The user will get those messages on first registration
bot.onSubscribe(response => {

    var userDetails = bot.getUserDetails(response.userProfile);
    console.log(userDetails);
    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  
  var myobj = [
    { 
      viber_id: response.userProfile.id, 
      name: response.userProfile.name,
      avatar:response.userProfile.avatar,
      country:response.userProfile.country,
      language:response.userProfile.language,
      status:'yes'
    }
   
  ];
  db.collection("users").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
});


    say(response, `Hi there ${response.userProfile.name} . I am ${bot.name}! Feel free to ask me if you are looking for jobs or how to create your cv more meaningful. If you are looking for job, Just send me a name of a jobs category and I'll do the rest!`);
});

bot.onUnsubscribe(response => {
    var userId = response.userId;
    console.log(`Unsubscribed: ${userId}`);
});


bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
    // This sample bot can answer only text messages, let's make sure the user is aware of that.
    if (!(message instanceof TextMessage)) {
        say(response, 'Sorry. I can only understand text messages.');
    }
    

});


bot.onTextMessage(/^hi|hello|Hi|Hello$/i, (message, response) => {
   
    var sendMessage = `Hi there ${response.userProfile.name}.  welcome to ${bot.name} . Fell free to ask me if you are looking for jobs. Type the category of jobs`;
    say(response,sendMessage);
     //const keyboardMessage = new KeyboardMessage(SAMPLE_KEYBOARD);
     //response.send(new TextMessage(`Hi there ${response.userProfile.name}.  welcome to ${bot.name} . Fell free to ask me if you are looking for jobs. Type the category of jobs`,) );
});

bot.onTextMessage(/./, (message, response) => {
    //checkUrlAvailability(response, message.text);
    console.log (' on text message....'+message.text);
    ValidURL(message.text);
    findJobs (response, message.text);
});

const WEB_URL='https://botmela.samuraigeeks.net/';
    
if (process.env.NOW_URL || process.env.HEROKU_URL || WEB_URL) {
    
    const http = require('http');
    const port = process.env.PORT || 5000;
    console.log('Magic happens on port ' + port);
    //app.use("/viber/webhook", bot.middleware()).listen(port, () => bot.setWebhook(process.env.NOW_URL || process.env.HEROKU_URL||WEB_URL));;
    //app.listen(port);
    console.log('Magic happens on port ' + port);
 http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(process.env.NOW_URL || process.env.HEROKU_URL||WEB_URL));
} else {
    logger.debug('Could not find the now.sh/Heroku environment variables. Please make sure you followed readme guide.');
}