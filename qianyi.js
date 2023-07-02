 
[rewrite_local]
^https:\/\/chat\.feixue666\.com\/api\/account\/info url script-response-body https://raw.githubusercontent.com/jayzheng12345/qx/main/qianyi.js
[mitm] 
hostname = chat.feixue666.com

var body = $response.body; 
let obj = JSON.parse($response.body);
obj.data. remainingPoints = 999999 ;
obj.data. totalPoints = 999999 ;
obj.data. isDisable = 1 ;
$done({body: JSON.stringify(obj)});