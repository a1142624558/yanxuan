<template>
  <div>
      <van-nav-bar title="砍价列表"  left-arrow @click-left="goHome"/>
      <Cut :cutList="cutList" :resultList="resultList"/>
  </div>
</template>

<script>
import Cut from "@/components/home/cut";
export default {
  name: "",
  mounted() {
      this.getCutList();
  },
  data() {
    return {
        cutList:[],
        resultList:[],
    };
  },
  components: {
    Cut
  },
  methods: {
    getCutList() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/kanjia/list"
      }).then(res => {
        console.log(res.data);
        this.cutList = res.data.goodsMap;
        this.resultList = res.data.result;
      });
    },
    goHome(){
        this.$router.push('/home');
    }
  }
};
</script>

<style scoped>
</style>