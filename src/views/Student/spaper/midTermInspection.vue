<template>
    <div>
        <a-card style="margin-top: 24px" :bordered="false" title="中期检测">
            <a-descriptions bordered>
                <a-descriptions-item label="姓名">{{studentName}}</a-descriptions-item>
                <a-descriptions-item label="学号">20202468</a-descriptions-item>
                <a-descriptions-item label="班级">20级计科二班</a-descriptions-item>
                <a-descriptions-item label="选题">未选择选题</a-descriptions-item>
            </a-descriptions>
        </a-card>
        <a-card  :bordered="false">
            <a-upload-dragger

                v-model:fileList="fileList"
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
                @drop="handleDrop"
            >
                <p class="ant-upload-drag-icon">
                </p>
                <p class="ant-upload-text">上传文件</p>
                <p class="ant-upload-hint">

                </p>
            </a-upload-dragger>
        </a-card>

    </div>
</template>

<script>
import {
    requestCurrentStudentData,
    requestStudentByUserId,
    requestClassName,
} from "@/api/student.js";
import { requestProjectById } from "@/api/project.js";
export default {
    name: "SQzxj",
    data() {
        return {
            fileList:[],
            studentData:[],
            studentName: sessionStorage.getItem('name'),
            projectName: "",
            className: "",
            temp: "",
        };
    },
    created() {
        // this.getStudentData();
    },
    methods: {
        async getStudentData() {
            const result = await requestCurrentStudentData();
            this.studentData = result.data.data;
            if (
                (this.studentData.projectId != null) &
                (this.studentData.projectId !== "")
            ) {
                requestProjectById(this.studentData.projectId).then(
                    (response) => {
                        this.projectName = response.data.data.projectName;
                    }
                );
            } else {
                this.projectName = "未选择选题";
            }
            const result2 = await requestClassName(this.studentData.studentId);
            this.className = result2.data.data;
        },
        handleChange() {
            console.log('change');
        },
        handleDrop() {
            console.log('drop');
        }
    },
};
</script>

<style scoped>
</style>
