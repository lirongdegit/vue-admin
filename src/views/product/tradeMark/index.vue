<template>
   <div>
    <el-button type="primary" icon="el-icon-plus" style="margin:10px 0px">添加</el-button>
    <el-table style="width:100%" border :data="list">
   
    <el-table-column type="index"
     label="序号" width="80px" align="center">
    </el-table-column>
    <el-table-column
    prop="tmName" label="名称" width="" align="center">
    </el-table-column>
    <el-table-column
    prop="logoUrl" label="型号" width="" align="center">
     <template slot-scope="{row,$index}">
      <img :src="row.logoUrl" alt="" style="width:100px;height:100px">
     </template>
    </el-table-column>
    <el-table-column
    prop="prop" label="操作" width="" align="center">
    <template slot-scope="{row,$index}">
      <el-button type="warning" icon="el-icon-edit" size="mini">修改</el-button>
      <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
     </template>
    </el-table-column>
  </el-table>



  <!-- @size-change="handleSizeChange"
 @current-change="handleCurrentChange" -->
  <el-pagination 
  style="margin-top:20px; textAlign:center"
  @current-page="page" 
  :total="total" 
  :pager-count="7"
  :page-size="limit" 
  :page-sizes="[3,5,10]" 
  @current-change="this.getPageList"
  @size-change="handleSizeChange"
  layout="prev,pager,next,jumper,->,sizes,total"
  >
  </el-pagination>


  <el-dialog title="添加品牌" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
  
  </div>
</template>

<script>
export default {
    name:'tradeMark',
    data(){
      return{
        page:1,
        limit:3,
        total:4,
        list:[]

      }
     
    },
    mounted(){
      this.getPageList();

    },
    methods:{
      async getPageList(pager = 1) {
        this.page = pager;
       const {page,limit} = this;
        let result = await this.$API.tradeMark.reqTradeMarkList(page,limit);
        if(result.code ==200){
          this.total = result.data.total;
          this.list = result.data.records;
        }

      },
      handleSizeChange(limit){
        this.limit = limit;

      }
     
    }
}
</script>

<style>

</style>