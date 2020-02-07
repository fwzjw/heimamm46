import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
     routes:[
        {
            path:'/login',
            component:login
        },
     ]
})


export default router