<template>
  <div>
    <el-breadcrumb separator="/" style="margin-bottom: 20px">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>论文管理</el-breadcrumb-item>
      <el-breadcrumb-item>开题报告</el-breadcrumb-item>
    </el-breadcrumb>

  <div id="ref_page" class="am-g">
	
			<div class="tpl-content-page-title" style="margin-bottom: 10px;">填写开题报告</div>

			<div class="am-panel am-panel-default">
				<div class="am-panel-bd">
					<div class="am-scrollable-horizontal">
							<table class="am-table am-table-bordered  am-table-centered am-text-nowrap">
								<tbody>
									<tr>
										<td rowspan="6" style="width: 45px;" class="am-text-middle">开题报告</td>
										<td colspan="2">姓 名</td>
										<td>性别</td>
										<td colspan="2">学 号</td>
										<td colspan="2">专 业</td>
										<td colspan="2">年 级</td>
									</tr>
									<tr id="stuInfo1">
										<td colspan="2"></td>
										<td></td>
										<td colspan="2"></td>
										<td colspan="2"></td>
										<td colspan="2"></td>
									</tr>
									<tr>
										<td rowspan="2" class="am-text-middle">题目</td>
										<td colspan="6" rowspan="2" class="am-text-middle" id="projectName"></td>
										<td colspan="2">课题来源</td>
									</tr>
									<tr>
										<td id="projectFrom"></td>
									</tr>
									<tr style="height: 260px;">
										<td class="am-text-middle" style="width: 30px;">概述</td>
										<td colspan="8"><textarea id="column1" placeholder="说明选题目的、意义，国内外研究现状等"
												style="width: 100%; height: 260px;"></textarea></td>
									</tr>
									<tr style="height: 260px;">
										<td class="am-text-middle">思路及方法</td>
										<td colspan="8"><textarea id="column2"
												style="width: 100%; height: 260px;"></textarea></td>
									</tr>
								</tbody>
							</table>
							<button id="ktbg_btn" type="button" class="am-btn am-btn-primary am-radius am-fr"
								data-am-loading="{spinner: 'circle-o-notch', loadingText: '提交中...', resetText: '提交完成'}">
								提交</button>
					</div>
				</div>
			</div>			  
	</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
.tpl-content-page-title {
    color: #697882;
    font-size: 22px;
    font-weight: 400;
}
.am-panel {
	margin-bottom: 20px;
	background-color: #fff;
	border: 1px solid transparent;
	border-radius: 0;
	-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
	box-shadow: 0 1px 1px rgba(0,0,0,.05);
	border-radius: 6px;
}
.am-table>tbody>tr>td,
.am-table>tbody>tr>th,
.am-table>tfoot>tr>td,
.am-table>tfoot>tr>th,
.am-table>thead>tr>td,
.am-table>thead>tr>th {
    border-top: 1px solid #F2F5F8;
 /*    color: #93a2a9; */
}
.am-text-middle {
  vertical-align: middle !important;
}
.am-panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 0;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.am-panel-bd {
  padding: 1.25rem;
}
.am-panel-default {
  border-color: #ddd;
}
</style>