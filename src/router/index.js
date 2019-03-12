import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/pages/welcome'
import ShowDemoInfo from '@/components/pages/showDemoInfo'
import Home from '@/components/pages/home'
import Index from '@/components/pages/index/index'
import ClassificationShow from '@/components/pages/classificationShow/classificationShow'
import OurServes from '@/components/pages/ourServes/ourServes'
import ContactUs from '@/components/pages/contactUs/contactUs'
import Banner from '@/components/common/banner'

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
			component: Home,
			children : [
				{
					path : 'index',
					name : 'Index',
					component : Index
				},
				{
					path : 'classificationShow',
					name : 'ClassificationShow',
					component : ClassificationShow
				},
				{
					path : 'ourServes',
					name : 'OurServes',
					component : OurServes
				},
				{
					path : 'contactUs',
					name : 'ContactUs',
					component : ContactUs
				},
			]
		},
		{
			path : '/showDemoInfo',
			name : 'ShowDemoInfo',
			component : ShowDemoInfo,
			beforeEnter: (to, from, next) => {
          // console.log('独享守卫')
          // console.log(to)
          // console.log(from)
          next()
      }
		},
		{
			path: '**',
			redirect:"/home"
		}
  ]
})
