import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/index";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "index",
            component: Index
        },
        {
            path: "/notice",
            name: "Notice",
            component: resolve => require(["../views/notice/notice"], resolve)
        },
        {
            path: "/timer",
            name: "timer",
            component: resolve => require(["../views/time/timer"], resolve)
        },
        {
            path: "/input",
            name: "input",
            component: resolve => require(["../views/input/index"], resolve)
        }
    ]
});
