import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "../components/Login";
import Main from "../components/Main";
import chat from "../components/chat";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },{
      path: '/Login',
      component: Login
    }, {
      path: '/Main',
      component: Main
    }, {
      path: '/chat',
      component: chat
    }
  ]
})
