[rewrite_local]
^https?:\/\/bzpp2\.iwzbz\.com\/api\/.+\/(user\/getvipinfo|User\/getWXPW) url script-response-body jiaoben/suanming.js

[mitm]
hostname = bzpp2.iwzbz.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.isSuccess = true;
chxm1023.validateKey = "chxm1023";
chxm1023.data = {
    "expires" : "2099-09-09 09:09:09",
    "vipLevel" : 3
  };

$done({body : JSON.stringify(chxm1023)});
