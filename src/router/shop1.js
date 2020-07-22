//导入组件
import addressList from "@/views/address/addressList";
import addressCreate from "@/views/address/addressCreate";

//定义路由地址
export default [
    {
        path: "/address/list",
        name: "addredd_list",
        component: addressList,
        meta: {
            title: "严选商城-地址列表"
        }
    },{
        path: "/address/create",
        name: "addredd_create",
        component: addressCreate,
        meta: {
            title: "严选商城-添加地址"
        }
    }
];