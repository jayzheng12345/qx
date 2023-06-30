[rewrite_local]
^https:\/\/open3\.vistastory\.com\/v3\/api\/vip url script-response-body https://github.com/jayzheng12345/qx/blob/a8cfe9080a464b96058fd1ca2aabd365967e04e4/tian.js
[mitm] 
hostname = open3.vistastory.com


const {body, url} = $response;
const obj = JSON.parse (body);
if (url.includes('/get_vip_price_info')) {
obj.isVip = 1
obj.expireVip = 0
obj.subscriptionVip.endTime = 4086238830000;
}
$done ({body: JSON.stringify(obj)});
