import Home from '@/module/home/page/home.vue';
import page_list from '@/module/cms/page/page_list.vue';
import page_add from '@/module/cms/page/page_add.vue';
export default [{
    path: '/',
    component: Home,
    name: 'CMS王泽旭',//菜单名称
    hidden: false,
    children:[
      {path:'/cms/page/list',name:'页面列表cms',component: page_list,hidden:false},
      {path:'/cms/page/add',name:'添加数据',component: page_add,hidden:true}
    ]
  }
]
