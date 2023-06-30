[rewrite_local]
^https:\/\/kittens\.afunapp\.com\/user\/get_user_info url script-response-body https://raw.githubusercontent.com/jayzheng12345/qx/main/chaidanmao.js
[mitm] 
hostname = kittens.afunapp.com

//hostname :kittens.afunapp.com
//重写链接：^https:\/\/kittens\.afunapp\.com\/user\/get_user_info

var tian = JSON.parse($response.body) ;
tian={
  "message" : "ok",
  "data" : {
    "user_info" : {
      "xp" : 1,
      "openid" : "ornfO4mCGVGlCwv-h_gRBqSBaKmY",
      "nickname" : "欢乐马",
      "win_rate" : "40.36",
      "charm" : 2,
      "register_time" : "2021-03-08",
      "mmr_info" : {
        "mmr" : 0,
        "level" : 3,
        "star_num" : 1
      },
      "next_level_xp" : 26,
      "coin_week" : 0,
      "season_info" : {
        "season" : 19,
        "start_time" : "2023.5.13",
        "end_time" : "2023.7.7"
      },
      "update_status" : 1,
      "avatar_box" : 0,
      "update_profile" : true,
      "game_gather" : {
        "team_gather" : {
          "win_rate" : "43.94",
          "game_count" : 198
        },
        "single_gather" : {
          "win_rate" : "38.63",
          "game_count" : 409
        }
      },
      "gender" : 1,
      "level" : 14,
      "uid" : 2057507,
      "game_count" : 607,
      "coin" : 99999,
      "is_shared" : false,
      "open_card_count" : 0,
      "is_tyro" : false,
      "avatar" : "https://thirdwx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM4gJnb7EKwgS6gMNM95ZBEiaQMezicdrVBykBunyoiczVqcmw4iaO7ictFMlAic8DZlREGCGmAibeHLic8b9w/132",
      "diamond" : 9999,
      "area" : {
        "province" : "湖北",
        "city" : "武汉"
      },
      "team_coin" : 0,
      "group_mmr" : {
        "mmr" : 2,
        "level" : 0,
        "star_num" : 0
      },
      "win_week" : 0,
      "privacy_info" : {
        "verify_name" : "",
        "bind_phone" : "",
        "is_adult" : true,
        "is_teen_game_time" : false,
        "is_verified" : false
      }
    }
  },
  "code" : 200
}
$done ({body : JSON.stringify (tian)});
