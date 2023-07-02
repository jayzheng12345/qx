 
[rewrite_local]
^https:\/\/chat\.feixue666\.com\/api\/account url script-response-body https://raw.githubusercontent.com/jayzheng12345/qx/main/qianyi.js
[mitm] 
hostname = chat.feixue666.com


var body = $response.body;
var url = $request.url;
var obj = JSON.parse (body);
const vip = '/info';
if (url.indexOf(vip) != -1) {
obj.data. remainingPoints = 999999 ;
obj.data. totalPoints = 999999 ;
obj.data. isDisable = 1 ;
body = JSON.stringify(obj);
}
$done ( {body});