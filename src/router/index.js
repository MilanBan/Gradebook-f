import Vue from "vue"
import VueRouter from "vue-router"
import Login from '../components/Login'
import Register from '../components/Register'
import Gradebooks from '../components/Gradebooks'
import SingleGradebook from '../components/SingleGradebook'
import CreateGradebook from '../components/CreateGradebook'
import CreateStudent from '../components/CreateStudent'
import Teachers from '../components/Teachers'
import SingleTeacher from '../components/SingleTeacher'
import CreateTeacher from '../components/CreateTeacher'

Vue.use(VueRouter);

const routes = [
    { 
        path: '/',
        redirect: '/gradebooks', 
        name: 'home' 
    },
    {
        path: '/gradebooks',
        name: 'gradebooks',
        component: Gradebooks,
    },
    {
        path: '/gradebooks/create',
        name: 'gradebooks-create',
        component: CreateGradebook
    },
    {
        path: '/gradebooks/:id',
        name: 'gradebooks-single',
        component: SingleGradebook,
        props: true
    },
    {
        path: '/teachers',
        name: 'teachers',
        component: Teachers,
        meta: { requiresAuth: true}
    },
    {
        path: '/teachers/create',
        name: 'teachers-create',
        component: CreateTeacher
    },
    {
        path: '/gradebooks/:id/students/create',
        name: 'students-create',
        component: CreateStudent
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/teachers/:id',
        name: 'teachers-single',
        component: SingleTeacher,
        props: true
    },
];


const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('token')
  
    if((to.name !== 'login' && to.name !== 'register') && !loggedIn) {
      next({ name: 'login' })
      return;
    } else if ((to.name === 'login' || to.name === 'register') && loggedIn) {
      return next ({ name: '/' })
    }
    else next()
  })

export default router;