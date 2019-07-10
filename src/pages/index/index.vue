<template>
  <div>
    <card></card>
    <div>首页</div>
    <button @click="add" type="button">add</button>
    <i-button type="primary">这是一个按钮</i-button>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      motto: "Hello miniprograme",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      }
    };
  },

  components: {
    card
  },
  mounted(){
   
    // 贝思客
    // this.$apis.test().then((res)=>{
    //   console.log(res);
    // })

    this.$apis.getfood().then((res)=>{
      console.log(res);
    })
  },

  methods: {
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    },
    add () {
      this.$store.commit('add')
    }
    
  }
}
</script>



<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: "";
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
</style>
