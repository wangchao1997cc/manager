<template>
  <div class="serch_box">
    <el-input placeholder="请输入内容" v-model="searchinfo" @input="changeData">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option v-for="(item,index) in selectData" :label="item" :key="index" :value="index"></el-option>

      </el-select>

    </el-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchinfo: "",
        select: 0, //选择的类别
      }
    },
    props: {
      selectData: {
        type: Array,
        default: () => [],
      }
    },
    methods: {
      changeData() {
        // if (!this.select) {
        //   return this.$message({
        //     message: '请先选择搜索的类别',
        //     type: 'error',
        //     duration: 2000
        //   })
        // }
        let params = {
          searchinfo : this.searchinfo,
          id:this.select,
        }
        this.$emit('searchData', params)
      }
    }
  }
</script>

<style>
  .serch_box {
    width: 60%;

  }

  .el-select {
    width: 110px;
  }
</style>
