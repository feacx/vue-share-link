import Vue from 'vue'
import MintUI from 'mint-ui'
import Router from 'vue-router'
import Teacher from '@/components/teacher/Teacher'
import Partner from '@/components/partner/Partner'
import Student from '@/components/student/Student'
import Honor from '@/components/honor/Honor'

Vue.use(Router)
Vue.use(MintUI)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Teacher',
      component: Teacher
    },
    {
      path: '/teacher',
      name: 'Teacher',
      component: Teacher
    },
    {
      path: '/partner',
      name: 'Partner',
      component: Partner
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    },
    {
      path: '/honor',
      name: 'Honor',
      component: Honor
    },
    {
      path: '/*',
      name: 'Teacher',
      component: Teacher
    }
  ]
})
