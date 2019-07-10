var Fly=require("flyio/dist/npm/wx") //wx.js为您下载的源码文件
var fly=new Fly; //创建fly实例

// fly.config.baseURL="https://www.bestcake.com"
fly.config.baseURL="https://cyapi.zhipuzi.com"


// 发送请求
fly.interceptors.request.use((request)=>{
    //给所有请求添加自定义header
    request.headers["X-Tag"]="flyio";
  	//打印出请求体
  	console.log(request.body)
  	//终止请求
  	//var err=new Error("xxx")
  	//err.request=request
  	//return Promise.reject(new Error(""))
  
    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
})


// 请求响应
fly.interceptors.response.use(
    (response) => {
        //只将请求结果的data字段返回
        return response.data
    },
    (err) => {
        //发生网络错误后会走到这里
        //return Promise.resolve("ssss")
    }
)
export default fly;