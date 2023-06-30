
const { body, url } = $response;
const obj = JSON.parse(body);
if (url.includes('/get_vip_price_info')) {
  obj.isVip = 1;
  obj.expireVip = 0;
  obj.subscriptionVip.endTime = 4086238830000;
}
$done({ body: JSON.stringify(obj) });