import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/pages/welcome'
import ClassificationShow from '@/components/pages/classificationShow/classificationShow'
import Home from '@/components/pages/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
		{
			path: '/home',
			name: 'Home',
			component: Home
		},
		{
			path: '/classificationShow',
			name: 'ClassificationShow',
			component: ClassificationShow
		},
  ]
})
