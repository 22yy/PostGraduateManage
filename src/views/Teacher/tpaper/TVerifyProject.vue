<template>
    <div>
        <a-card title="审核选题申请">
            <a-table :data-source="VerifyData">
                <a-table-column key="projectName" title="课题名" data-index="projectName" align="center" />

                <a-table-column key="userName" title="选题学生" data-index="userName" align="center" />
                <a-table-column key="className" title="班级" data-index="className" align="center" />
                <a-table-column key="tel" title="电话" data-index="tel" align="center" />

                <!-- 不写template模板的话，直接显示该行数据对应的key配对的值 -->
                <a-table-column key="action" title="操作" align="center">
                    <template slot-scope="text, record">
                        <div v-if="record.projectState == 1">
                            <a-button type="link" @click="verifyChoose(record)">同意</a-button>
                            <a-button type="link" @click="disagree(record)">拒绝</a-button>
                        </div>
                        <div v-else>已同意选择</div>
                    </template>
                </a-table-column>
            </a-table>
        </a-card>
    </div>
</template>

<script>
import {
    requestVerifyPorjectList,
    requestVerifyChoose,
    reqeustChangeNoSelect,
} from "@/api/project.js";
import { requestTeacherByUserId,requestTeacherByTeacherId } from "@/api/teacher.js";
import { message } from "ant-design-vue";

export default {
    name: "TVerifyProject",
    data() {
        return {
            VerifyData: [],
            teacherData: [],
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            const result = await requestTeacherByTeacherId(
                sessionStorage.getItem('tid')
            );
            this.teacherData = result.data.data;
            // console.log(this.teacherData);
            const projectresult = await requestVerifyPorjectList(
                this.teacherData.teacherId
            );
            this.VerifyData = projectresult.data.data;
            // console.log(this.VerifyData);
        },
        verifyChoose(record) {
            requestVerifyChoose(record.projectId).then((response) => {
                if (response.data.code == 1) {
                    message.success("成功");
                } else {
                    message.error("失败");
                }
            });
            this.fetchData();
        },

        disagree(record) {
            reqeustChangeNoSelect(record.projectId).then((response) => {
                if (response.data.code == 1) {
                    message.success("成功");
                } else {
                    message.error("失败");
                }
            });
            this.fetchData();
        },
    },
};
</script>

<style scoped>
</style>
