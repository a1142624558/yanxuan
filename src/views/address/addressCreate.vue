<template>
  <div>
       <navBar :title="'添加地址'"></navBar>

        <van-form>
           <van-field label="联系人" placeholder="姓名" v-model="form.linkMan" class="inp"/>
           <van-field label="手机号" placeholder="手机号" v-model="form.mobile" class="inp"/>
           <van-field label="省市区" class="inp"/>
           <van-field label="详细地址" placeholder="详细地址" v-model="form.address" class="inp"/>
           <van-field label="邮政编码" placeholder="邮政编码" v-model="form.code" class="inp"/>

           <van-button type="danger" @click="addressAdd" block>添加地址</van-button>
        </van-form>
  </div>
</template>

<script>
import navBar from "@/components/common/head";
import formData from "@/utils/formdata";
import storage from "@/utils/storage";
export default {
  name: '',
  data() {
    return {
        form:{
            linkMan:"",
            mobile:"",
            address:"",
            cityId:0,
            provinceId:0,
            code:0,
        }
    };
  },
  components:{
      navBar
  },
  methods: {
      addressAdd(){
          let user = storage.get("09A_user",true);
          this.form.token = user.token;
          let data = formData.set(this.form);

          this.$axios.post('https://api.it120.cc/small4/user/shipping-address/add',data).then(res=>{
              console.log(res);
              if(res.code == 0){
                  this.$toast.success("添加地址成功");
                  this.$router.push("/address/list");
              }else{
                  this.$toast.fail(res.msg);
              }
          })
      }
  },
};
</script>

<style scoped>
.inp{
    border-bottom: #dddddd 1px solid;
    line-height: .88rem;
}
</style>