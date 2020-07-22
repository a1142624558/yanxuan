<template>
  <div>
    <GoodsDetail :content="content" :banners="banners" />

    <div class="bottom">
        <van-button  type="danger" @click="cutJoin" block>立即发起砍价  最少砍刀{{goodsInfo.minPrice}}元</van-button>
    </div>
  </div>
</template>

<script>
import GoodsDetail from "@/components/common/goodsDetail";
export default {
  name: "",
  mounted() {
    this.gId = this.$route.params.id;
    this.kjId = this.$route.params.kjid;
    this.getGoodsInfo();
  },
  data() {
    return {
      gId: 0, //商品的ID
      kjId: 0, //商品的砍价ID
      banners: [], //商品轮播图
      content: null,
      goodsInfo: []
    };
  },
  components: {
    GoodsDetail
  },
  computed: {},
  methods: {
    //获取商品详情信息
    getGoodsInfo() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/detail",
        params: {
          id: this.gId
        }
      }).then(res => {
        console.log(res);
        this.banners = res.data.pics;
        this.content = res.data.content;
        //设置商品的基本信息
        this.goodsInfo = res.data.basicInfo;
      });
    },
    cutJoin(){
        this.$router.push({
            path:"/goods/cutinfo",
            query:{id:this.gId,kjid:this.kjId}
        });
        
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom{
    width: 100%;
    position:fixed;
    bottom: 0px;
}
</style>