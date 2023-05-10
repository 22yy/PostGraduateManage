import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost/",
    headers: { "Content-Type": "application/json" },
    timeout: 6000
    // headers.common["token"] = store.state.token;
});

//添加请求拦截器s
request.interceptors.request.use(
    function(config) {
        return config;
    },
    function(error) {
        console.log("interceptorsError", error);
        return Promise.reject(error);
    }
);
//添加响应拦截器
request.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        return Promise.reject(error);
    }
);

export default request;
