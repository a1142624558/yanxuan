<template>
  <div class="box">
    <!-- 用户头部信息 -->
    <div id="user-top">
      <div>
        <van-uploader v-model="fileList" style="border-radius: 50%;">
          <van-icon name="add-o" size="80" v-show="fileList.length==0" />
        </van-uploader>
      </div>
      <div>
        <p>立即登录</p>
        <p>积分:0</p>
      </div>
    </div>
    <div style="margin-bottom: .2rem;">
      <van-notice-bar
        left-icon="volume-o"
        background="#FFF"
        color="#A00000"
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
    </div>

    <div class="order" @click="gotoPage('/mine/order')">
      <div>
        <van-icon name="orders-o" size="25" color="#A00000" />
      </div>
      <div>我的订单</div>
      <div>
        <van-icon name="arrow" size="25" />
      </div>
    </div>

    <div class="pay">
      <figure>
        <van-icon name="paid" size="35" />
        <figcaption>待付款</figcaption>
      </figure>
      <figure>
        <van-icon name="send-gift-o" size="35" />
        <figcaption>待发货</figcaption>
      </figure>
      <figure>
        <van-icon name="logistics" size="35" />
        <figcaption>待收货</figcaption>
      </figure>
      <figure>
        <van-icon name="comment-o" size="35" />
        <figcaption>待评价</figcaption>
      </figure>
    </div>

    <div class="info">
      <figure>
        <van-icon name="gold-coin-o" size="35" color="#A00000"/>
        <figcaption>我的余额</figcaption>
      </figure>
      <figure>
        <van-icon name="refund-o" size="35" color="#A00000"/>
        <figcaption>我的砍价</figcaption>
      </figure>
      <figure>
        <van-icon name="coupon-o" size="35" color="#008844"/>
        <figcaption>我的礼券</figcaption>
      </figure>
      <figure>
        <van-icon name="star-o" size="35" color="#008844"/>
        <figcaption>我的收藏</figcaption>
      </figure>
      <figure @click="gotoPage('/address/list')">
        <van-icon name="location-o" size="35" color="#0088dd"/>
        <figcaption>我的地址</figcaption>
      </figure>
      <figure>
        <van-icon name="service-o" size="35" color="#0088dd"/>
        <figcaption>待付款</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      fileList: [{ url: "/static/user.png" }]
    };
  },
  computed: {},
  methods: {
    gotoPage(url){
      this.$router.push(url);
    }
  }
};
</script>

<style lang="scss" >
.box {
  width: 100%;
  background-color: #f0f0f0;

  #user-top {
    color: #fff;
    background: #c1b18f;
    padding: 0.3rem;
    box-sizing: border-box;
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:nth-of-type(2) {
      width: 75%;
      p {
        line-height: 0.66rem;
        font-size: 0.35rem;
      }
      p:nth-of-type(2) {
        width: 2rem;
        text-indent: 0.1rem;
        font-size: 0.25rem;
        background: #b3a078;
      }
    }
    .van-uploader__preview-image img {
      border-radius: 50% !important;
    }
  }

  .order {
    background: #fff;
    width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: #dddddd 1px solid;
  }

  .pay {
    color: #808080;
    margin-top: 0.2rem;
    background: #fff;
    width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: #dddddd 1px solid;
    figure {
      width: 25%;
      text-align: center;
      figcaption {
        margin-top: 0.15rem;
      }
    }
  }

  .info {
    margin-top: 0.2rem;
    background: #fff;
    width: 100%;
    padding: 0.1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: #dddddd 1px solid;
    flex-wrap: wrap;
    figure {
      width: 33%;
      text-align: center;
      margin-bottom: 0.2rem;
      figcaption {
        margin-top: 0.15rem;
      }
    }
  }
}
</style>