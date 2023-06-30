 
[rewrite_local]
http:\/\/app\.thwlqy\.com\/login\/login\/sign\.html url script-response-body https://raw.githubusercontent.com/jayzheng12345/qx/main/qianyi.js
[mitm] 
hostname = app.thwlqy.com

//hostname :app.thwlqy.com
sign.html
//重写链接：http:\/\/app\.thwlqy\.com\/login\/login\/sign\.html

****************************/



var body = $response.body; 
let obj = JSON.parse($response.body);
obj.msg.time = -1 ;
$done({body: JSON.stringify(obj)});
