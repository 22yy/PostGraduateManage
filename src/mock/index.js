const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/paper/topicList', 'get', require('./json/topicList.json'));

Mock.mock('/teacher/getTeacherByTeacherId?teacherId=4','get', require('./json/teacherById.json'))
Mock.mock('/teacher/getAllTeacherList','get', require('./json/teacherList.json'))

Mock.mock('/student/getstudentprocesslist?teacherId=4','get', require('./json/process.json'))
Mock.mock('/student/getStudentListByTeacherId?teacherId=4','get', require('./json/getStuLisetByTid.json'))
Mock.mock('/student/getCurrentStudentData','get', require('./json/curStu.json'))

Mock.mock('/project/getprojectlist?pageSize=10&pageNum=0','get', require('./json/projectList.json'))
Mock.mock('/project/getverifyprojectlist?teacherId=4','get', require('./json/verifyProject.json'))
Mock.mock('/project/getprojectlistbyteacherid?teacherId=4','get', require('./json/project.json'))


