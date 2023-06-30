^http[s]?:\/\/app\.thwlqy\.com\/login\/login\/veifys\.html url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/qysj.js

hostname = app.thwlqy.com

****************************/



var body = $response.body; 
let obj = JSON.parse($response.body);
obj.msg.time = -1 ;
$done({body: JSON.stringify(obj)});
