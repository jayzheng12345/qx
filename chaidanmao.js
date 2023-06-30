[rewrite_local]
^https:\/\/kittens\.afunapp\.com\/user\/get_user_info url script-response-body https://raw.githubusercontent.com/jayzheng12345/qx/main/chaidanmao.js
[mitm] 
hostname = kittens.afunapp.com

var body = $response.body; 
let obj = JSON.parse($response.body);
obj.data.user_info.update_status=1;
obj.data.user_info.update_profile= true;
obj.data.user_info.coin= 9999;
obj.data.user_info. diamond = 9999;
$done({body: JSON.stringify(obj)});
