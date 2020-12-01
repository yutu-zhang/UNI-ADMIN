import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index.vue'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path:'*',
  //   redirect:{name:'index'}
  // },
  {  // 登录页
    path: '/login',
    name: 'Login',
    component: Login
  },
  // {
  //   path:'/',
  //   component:Home,
  //   redirect:'/index',
  //   children:[
  //     {
  //       path:'index',
  //       name:'index',
  //       component:import('../views/home/homes.vue'),
  //       meta:{title:'首页'}
  //     }
  //   ]
  // },
  // {
  //   path:'/',
  //   component:Home,
  //   redirect:'/index',
  //   children:[
  //     {
  //       path:'image',
  //       name:'image',
  //       component:import('../views/image/index.vue'),
  //       meta:{title:'相册管理'}
  //     }
  //   ]
  // },
  // {
  //   path:'/shop',
  //   component:Home,
  //   redirect:'/shop/goods/list',
  //   children:[
  //     {
  //       path:'goods/list',
  //       name:'goods_list',
  //       component:import('@/views/shop/goods.vue'),
  //       meta:{title:'商品列表'}
  //     }
  //   ]
  // },
  {  // home页
    path: '/',
    // name: 'index',
    redirect:'/index',
    component:Home,
    children:[
      {
        path:'index',
        name:'index',
        meta:{title:'后台首页'},
        component:()=> import('../views/home/homes.vue')
      },
      {
        path:'image',
        name:'image',
        meta:{title:'相册管理'},
        component:()=> import('../views/image')
      },
      { // 商品
        path:'shop',
        name:'shop',
        redirect:{name:'goods_list'},
        component:()=>import('@/views/shop/goods.vue'),
        children:[
          {
            path:'/shop/goods/list',
            name:'goods_list',
            meta:{title:'商品列表'},
            component:()=>import('@/views/shop/goods.vue')
          },
        ]
      },
      { //订单
        path:'order',
        name:'order',
        component:()=>import('../views/order/order'),
        children:[
          {
            path:'order/list',
            name:'order_list',
            meta:{title:'订单管理'},
            component:()=>import('../views/order/order')
          },
          {
            path:'invoice/list',
            name:'invoice_list',
            meta:{title:'发票管理'},
            component:()=>import('../views/order/invoice')
          },
        ]
      },
    ]
  },
  // {
  //   path:'/',
  //   redirect: Home,
  //   children:[

  //   ]
  // },
]

const router = new VueRouter({
  routes
})

export default router
