import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
	// { path: '/', component: Home },
	
	// { path: '/:noFound(.*)', component: NotFound },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'btn-active',
})

export default router
