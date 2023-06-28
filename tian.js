[rewrite_local]
^https:\/\/open3\.vistastory\.com\/v3\/api\/vip url script-response-body tian.js
[mitm] 
hostname = open3.vistastory.com


const {body, url} = $response;
const obj = JSON.parse (body);
if (url.includes('/get_vip_price_info')) {
  obj.subscriptionVip.endTime = 4086238830000;
}
$done ({body: JSON.stringify(obj)});
