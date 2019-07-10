import store from "./store"
import Apis from "./api"
console.log(Apis);
export default (Vue)=>{
    Vue.prototype.$store=store;
    Vue.prototype.$apis=Apis;
    Vue.prototype.$eventHub=new Vue();

    /*
    this.$eventHub.$on("xxx",()=>{})
    this.$eventHub.$emit("xxx",{xxx:xxx})
    */

}

