import fly from "./http"

class Apis {
    test() {
        // 贝思客蛋糕
        return fly.get("/getjson.ashx", {
            v: "1562722622906",
            c: "Index",
            m: "GetBannerList",
            Type: "1",
            City: "上海",
            BrandType: "1"
        })
    }
    getfood() {
        return fly.request("/customer/common/page/food/choose?ver=v2", {
            admin_id: "88997",
            lwm_appid: "dh129ahsd9898123gjhjfamnxoo1",
            food_type: 1,
            shop_id: 374933,
            from_type: 1
        },{
            method:"post",
            headers:{
                "content-type":"application/x-www-form-urlencoded"
            }
         })
    }
}
export default new Apis();