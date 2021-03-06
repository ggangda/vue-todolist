import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import TodoItems from '@/components/TodoItems'
import { MdButton, MdContent, MdTabs, MdField, MdCheckbox, MdList, MdMenu, MdSubheader } from 'vue-material/dist/components/'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import moment from 'moment'
import VueMomentJS from 'vue-momentjs'

Vue.use(Router)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdField)
Vue.use(MdCheckbox)
Vue.use(MdList)
Vue.use(MdMenu)
Vue.use(MdSubheader)
Vue.use(VueMomentJS, moment)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
