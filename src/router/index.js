import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//引入自定义的路由文件
import shop from "./shop";
import shop1 from "./shop1";

//study相关信息
import lazyload from "@/views/study/lazyload";
import waterfall from "@/views/study/waterfall";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lazyload',
      name: 'lazyload',
      component: lazyload,
      meta:{
        title:"图片懒加载"
      }
    },{
      path: '/waterfall',
      name: 'waterfall',
      component: waterfall,
      meta:{
        title:"瀑布流布局"
      }
    },
    //扩展运算符
    ...shop,
    ...shop1,
  ]
})