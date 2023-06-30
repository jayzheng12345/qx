[rewrite_local]
^https:\/\/kittens\.afunapp\.com\/user\/get_user_info url script-response-body 自己命名.js
[mitm] 
hostname = kittens.afunapp.com

var body = $response.body; 
let obj = JSON.parse($response.body);
obj.data.user_info.coin= 9999;
obj.data.user_info. diamond = 9999;
$done({body: JSON.stringify(obj)});
