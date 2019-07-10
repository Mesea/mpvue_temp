<template>
  <div>
      测试vuex
      <p>{{count}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // num:0
    }
  },
  computed:{
    count(){
      return this.$store.state.num;
    }
  },
  mounted(){
    // console.log(this.$store.state.num)
    // this.num=
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
