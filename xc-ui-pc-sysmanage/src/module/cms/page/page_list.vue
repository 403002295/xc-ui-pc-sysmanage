<template>
    <div>
      <!--查询表单-->
       <el-button size="small" @click="query">查询</el-button>
     <el-table
:data="list"
stripe
style="width: 100%">
<el-table-column type="index" width="60">
</el-table-column>
<el-table-column prop="pageName" label="页面名称" width="120">
</el-table-column>
<el-table-column prop="pageAliase" label="别名" width="120">
</el-table-column>
<el-table-column prop="pageType" label="页面类型" width="150">
</el-table-column>
<el-table-column prop="pageWebPath" label="访问路径" width="250">
</el-table-column>
<el-table-column prop="pagePhysicalPath" label="物理路径" width="250">
</el-table-column>
<el-table-column prop="pageCreateTime" label="创建时间" width="180" >
</el-table-column>
</el-table>
  <el-pagination
  background
  layout="prev, pager, next"
  :total="total" 
  :page-size="params.size" 
  :current-page="params.page" 
  @current-change="changePage" 
  style="float:right">
  
</el-pagination>
    </div>
</template>

<script>
import * as cmsAPI from '../api/cms'
     export default {
    data() {
      return {
        list: [],
        total:50,
        params:{
          size:4,
          page :1
        }
      }
    },
    methods: {
      query:function(){
        //调用服务端接口
        
        cmsAPI.page_list(this.params.page,this.params.size).then((res)=>{
          //将res的数据结构搞清楚
            this.list=res.queryResult.list;
            this.totle=res.queryResult.totle;
        })
      },
      changePage:function(page){
        this.params.page=page;
        this.query()
      }
    },
    mounted() {
      this.query();
    },
  }
 </script>

<style>
  /*编写页面样式，不是必须*/
</style>
