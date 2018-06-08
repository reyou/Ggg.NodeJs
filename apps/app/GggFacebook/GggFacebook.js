//=============================================================================
var request = require('request');
// The following environment variables are respected by request:
// HTTP_PROXY / http_proxy
// HTTPS_PROXY / https_proxy
// NO_PROXY / no_proxy
process.env.HTTP_PROXY = "http://127.0.0.1:8888";
//=============================================================================
const pageAccessToken = "EAAbd6GE7kwQBAF9qhs3H7Q2OvBN8xoife2LJyA9T746JgDMMw1psJfAFyKUOZAZAosxBPsAS26YLfp68mZCYf5dzSmvrccZBmYmYZAWTh0YZBCR2TfnKK2IRhtueEe5XSB0BhCP0moZAWwW6lBQCYVDlj0pVZB5rfJ484wdeZCCyy1gZDZD";
//=============================================================================
// https://developers.facebook.com/docs/messenger-platform/messenger-profile
let messengerProfileFun = function () {
    console.log("messengerProfileFun");    
    request.post({
        rejectUnauthorized: false,
        url: 'https://graph.facebook.com/v2.6/me/messenger_profile?access_token=' + pageAccessToken,
        headers: {
            "ggg": "application/ggg"
        },
        json: {
            "persistent_menu": [
                {
                    "locale": "default",
                    "composer_input_disabled": false,
                    "call_to_actions": [
                        {
                            "type": "postback",
                            "title": "Topics",
                            "payload": "topics"
                        },
                        {
                            "type": "postback",
                            "title": "Help",
                            "payload": "help"
                        },
                        {
                            "type": "web_url",
                            "title": "Customer Service",
                            "url": "https://customercare.webmd.com/ics/support/ticketnewwizard.asp?style=classic&deptID=18003"
                        }
                    ]
                }
            ]
        }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
    });
    console.log("\n");
}
// 
 messengerProfileFun();
//=============================================================================
// https://developers.facebook.com/docs/messenger-platform/thread-settings/greeting-text
let threadSettingsFun = function () {
    console.log("threadSettingsFun");    
    request.post({
        rejectUnauthorized: false,
        url: 'https://graph.facebook.com/v2.6/me/thread_settings?access_token=' + pageAccessToken,
        headers: {
            "ggg": "application/ggg"
        },
        json: {
            "setting_type": "call_to_actions",
            "thread_state": "new_thread",
            "call_to_actions": [{
                "payload": "getstarted"
            }]
        }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
    });
    console.log("");
}
 // threadSettingsFun();
//=============================================================================