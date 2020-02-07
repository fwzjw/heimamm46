import Vue from 'vue'
import VueRouter from 'vue-router'
import s1 from '../components/1.vue'

Vue.use(VueRouter)

const router = new VueRouter({
     routes:[
        {
            path:'/',
            component:s1
        },
     ]
})


export default router