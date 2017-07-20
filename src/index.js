'use strict';

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
const natural           = require('natural');
const stemmer           = natural.PorterStemmer;


const logger = createLogger();
const VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY ="464b4b09d9312d68-f40d732c7a251e8c-223ffae9b84c06fe";
  

var request = require('request');
var http = require('http');

function createLogger() 
{
    const logger = new winston.Logger({
        level: "debug" // We recommend using the debug level for development
    });

    logger.add(winston.transports.Console, toYAML.config());
    return logger;
}

function say(response, message) {
    response.send(new TextMessage(message));
}

function jobMessage (response,message) {
    response.send(new  UrlMessage(message));
}



function apiSend(botResponse,category) {


    var queryUrl = "http://www.chakri.com/chkapi/rest/jobnotification?category_name="+category+"&key=16486";
    
    var url = queryUrl;
    
    var myTemplate = {
                        "tracking_data": "tracking data",
                        "type": "url",
                        "media": "http://www.chakri.com"
                    };
    
    

    http.get(url, function(res){
            
            var body = '';
            
            res.on('data', function(chunk){
                body += chunk;
            });

            res.on('end', function(){
                logger.debug(body);
                var jobResponse = JSON.parse(body);
                logger.debug(jobResponse);
                
                for (var i=0; i<jobResponse.data.length; i++){
                    
                    var id = JSON.stringify(jobResponse.data[i].id);
                    var job_title = JSON.stringify(jobResponse.data[i].job_title);
                    var category = JSON.stringify(jobResponse.data[i].category);
                    var item_url = JSON.stringify(jobResponse.data[i].item_url);
                    //item_url = 'http://www.chakri.com/job/show/35585/probationary-officer';    
                    console.log("Got a response: ", item_url);
                    /*if (!error && requestResponse.statusCode === 200) {
                        if (body.search('is up') !== -1) {
                            say(botResponse, 'Hooray! ' + urlToCheck + '. looks good to me.');
                        } else if (body.search('Huh') !== -1) {
                            say(botResponse, 'Hmmmmm ' + urlToCheck + '. does not look like a website to me. Typo? please follow the format `test.com`');
                        } else if (body.search('down from here') !== -1) {
                            say(botResponse, 'Oh no! ' + urlToCheck + '. is broken.');
                        } else {
                            say(botResponse, 'Snap...Something is wrong with isup.me.');
                        }       
                    }*/


                    var myelement = {
                        tracking_data: job_title,
                        type: "url",
                        media: item_url
                        
                        
                };
                
              
                
                logger.debug("my element" + myelement );
               say(botResponse,item_url); 
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

    // Multiple messages
    /* bot.sendMessage(botResponse, [
                new TextMessage("Here's the product you've requested:"),
                new UrlMessage("http://my.ecommerce.site/product1"),
                new TextMessage("Shipping time: 1-3 business days")
            ]);*/
           
            /*if (body.search('is up') !== -1) {
                say(botResponse, 'Hooray! ' + urlToCheck + '. looks good to me.');
            } else if (body.search('Huh') !== -1) {
                say(botResponse, 'Hmmmmm ' + urlToCheck + '. does not look like a website to me. Typo? please follow the format `test.com`');
            } else if (body.search('down from here') !== -1) {
                say(botResponse, 'Oh no! ' + urlToCheck + '. is broken.');
            } else {
                say(botResponse, 'Snap...Something is wrong with isup.me.');
            }  */    
       
    
}


if (!VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY) {
    logger.debug('Could not find the Viber Public Account access token key in your environment variable. Please make sure you followed readme guide.');
    return;
}

// Creating the bot with access token, name and avatar
const bot = new ViberBot(logger, {
    authToken: VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY, // Learn how to get your access token at developers.viber.com
    name: "Chakri",
    avatar: "https://raw.githubusercontent.com/devrelv/drop/master/151-icon.png" // Just a placeholder avatar to display the user
});


// The user will get those messages on first registration
bot.onSubscribe(response => {
    say(response, `Hi there ${response.userProfile.name}. I am ${bot.name}! Feel free to ask me if you are looking for jobs or how to create your cv more meaningful. If you are looking for job, Just send me a name of a jobs category and I'll do the rest!`);
});

bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
    // This sample bot can answer only text messages, let's make sure the user is aware of that.
    if (!(message instanceof TextMessage)) {
        say(response, 'Sorry. I can only understand text messages.');
    }
});
/*
text name
*/

bot.onTextMessage(/^hi|hello|Hi|Hello$/i, (message, response) => {

     response.send(new TextMessage(`Hi there ${response.userProfile.name}. I am ${bot.name} . welcome to chakri.com . Fell free to ask me if you are looking for jobs. Type the category of jobs`));
});

bot.onTextMessage(/./, (message, response) => {
    //checkUrlAvailability(response, message.text);
    findJobs (response, message.text);
});




const WEB_URL='https://botmela.samuraigeeks.net/';

if (process.env.NOW_URL || process.env.HEROKU_URL || WEB_URL) {
    
    const http = require('http');
    const port = process.env.PORT || 5000;

    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(process.env.NOW_URL || process.env.HEROKU_URL||WEB_URL));
} else {
    logger.debug('Could not find the now.sh/Heroku environment variables. Please make sure you followed readme guide.');
}