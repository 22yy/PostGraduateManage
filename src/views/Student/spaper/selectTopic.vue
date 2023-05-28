<template>
<div>
   <el-breadcrumb separator="/" style="margin-bottom:20px">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>论文管理</el-breadcrumb-item>
      <el-breadcrumb-item>选择课题</el-breadcrumb-item>
    </el-breadcrumb>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="topic" label="课题名" width="120" align="center">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120" align="center">
    </el-table-column>
    <el-table-column prop="direction" label="教学方向" width="200" align="center">
    </el-table-column>
    <el-table-column prop="sex" label="性别" width="120" align="center">
    </el-table-column>
    <el-table-column prop="phone" label="联系方式" width="120" align="center">
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small"
          >选择该老师的课题</el-button
        >
        <!-- <el-button type="text" size="small">编辑</el-button> -->
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          :page-size="pageSize"
          @current-change="changePage"
      >
        </el-pagination>
</div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
     changePage(page) {
      page = page - 1
      const that = this
      let start = page * that.pageSize, end = that.pageSize * (page + 1)
      let length = that.tmpList.length
      let ans = (end < length) ? end : length
      that.tableData = that.tmpList.slice(start, ans)
    },
    getTopicList() {
      axios.get('/paper/topicList').then(res => {
        let list = res.data;
        this.tableData = list?.data;
        this.total = list?.data.length;
      })
    }
  },
 created() {
  // this.getTopicList()
 },
  data() {
    return {
      pageSize:10,
      total:100,
      tableData: [ {
      "topic": "javjavajva",
      "name": "王小虎",
      "direction": "计算机科学",
      "sex": "女",
      "phone": 12344678900,
      "office": "计算机科学教研室",
      "leftNumber": 3
    },
    {
      "topic": "javjavajva",
      "name": "王小虎",
      "direction": "计算机科学",
      "sex": "女",
      "phone": 12344678900,
      "office": "计算机科学教研室",
      "leftNumber": 3
    },
    {
      "topic": "javjavajva",
      "name": "王小虎",
      "direction": "计算机科学",
      "sex": "女",
      "phone": 12344678900,
      "office": "计算机科学教研室",
      "leftNumber": 3
    },
    {
      "topic": "javjavajva",
      "name": "王小虎",
      "direction": "计算机科学",
      "sex": "女",
      "phone": 12344678900,
      "office": "计算机科学教研室",
      "leftNumber": 3
    }],
    };
  },
};
</script>