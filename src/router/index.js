import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/notice',
            name: 'Notice',
            component: resolve => require(["../views/notice/notice.vue"], resolve)
        },
        {
            path: '/timer',
            name: 'timer',
            component: resolve => require(["../views/time/timer.vue"], resolve)
        }
    ]
})
