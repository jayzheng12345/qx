^https:\/\/open3\.vistastory\.com\/v3\/api\/vip\/get_vip_price_info url script-response-body https://raw.githubusercontent.com/jayzheng12345/qx/main/tian.js
[mitm] 
hostname = open3.vistastory.com
var tian = JSON.parse($response.body) ;
tian={
  "status" : 1,
  "subscriptionVip" : {
    "userId" : 650130,
    "beginTime" : 1666095992000,
    "id" : 135248,
    "endTime" : 4086523849000,
    "createTimeFormat" : "2022-10-18 20:26:32",
    "createTime" : 1666095992000,
    "isActive" : 1
  },
  "vipInfo" : {
    "isMiniVip" : 1,
    "expireVip" : 0,
    "subscriptionVip" : {
      "userId" : 650130,
      "beginTime" : 1666095992000,
      "id" : 135248,
      "endTime" : 4086523849000,
      "createTimeFormat" : "2022-10-18 20:26:32",
      "createTime" : 1666095992000,
      "isActive" : 1
    },
    "isVip" : 1
  },
  "expireVip" : 0,
  "shoppingNotice" : "所有用户一旦付费，即获得其购买商品在会员期及Vista看天下App服务期内的阅读权限；同时获得同一账号在微信小程序中的相应阅读权限。 \n本产品为虚拟内容服务，一经购买成功，概不退货或退款，请您理解并谨慎下单。\n问题反馈及意见建议，请发邮件至VistaApp@126.com。",
  "renewalNotice" : "付款：用户确认购买并付款后计入iTtunes账户；\n取消续订：如需取消续订，请在当前订阅周期到期前24小时以前，\n手动在iTtunes/Apple ID设置管理中关闭自动续费功能，到期前24\n小时内取消，将会收取订阅费用；\n续费：苹果iTtunes账户会在到期前24小时内扣费，扣费成功后订\n阅周期顺延一个订阅周期。",
  "userPrices" : [
    {
      "productType" : 13,
      "appleProductId" : "",
      "price" : 18800,
      "oldFriendCutPrice" : 0,
      "isHasCoupon" : 0,
      "tag" : "",
      "title" : "年卡VIP",
      "intro" : "15.67元/月",
      "productValue" : 1,
      "productPrice" : {
        "productType" : 13,
        "id" : 9,
        "price" : 18800,
        "originalPrice" : 18800,
        "title" : "9:VIP_年卡VIP_1_18800",
        "productValue" : 1,
        "productStyle" : "VIP"
      },
      "productStyle" : "VIP"
    },
    {
      "productType" : 13,
      "appleProductId" : "",
      "price" : 6800,
      "oldFriendCutPrice" : 0,
      "isHasCoupon" : 0,
      "tag" : "",
      "title" : "季卡VIP",
      "intro" : "22.67元/月",
      "productValue" : 2,
      "productPrice" : {
        "productType" : 13,
        "id" : 8,
        "price" : 6800,
        "originalPrice" : 6800,
        "title" : "8:VIP_季卡VIP_2_6800",
        "productValue" : 2,
        "productStyle" : "VIP"
      },
      "productStyle" : "VIP"
    }
  ],
  "msg" : "success",
  "isVip" : 1,
  "user" : {
    "phone" : "131****7191",
    "nick" : "米兰的小铁匠",
    "hasBindPhone" : 1,
    "id" : 650130,
    "image" : "https://thirdwx.qlogo.cn/mmopen/vi_32/cccIlGK9d3XX2u7tH7pZhVbRoEgzOvibMMULcC87DfmGEUskv8rdZ3NiaiaN9EY1bL9bX8cfspwPNaTnich6Luq4kA/132",
    "avatarUrl" : "https://thirdwx.qlogo.cn/mmopen/vi_32/cccIlGK9d3XX2u7tH7pZhVbRoEgzOvibMMULcC87DfmGEUskv8rdZ3NiaiaN9EY1bL9bX8cfspwPNaTnich6Luq4kA/132",
    "isOffical" : null,
    "sex" : 0,
    "pendantIconUrl" : null
  }
}
$done ({body : JSON.stringify (tian)});