import { createRouter, createWebHistory } from 'vue-router';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import TheLayout from '@/components/TheLayout.vue';

const routes = [
	{
		path: '/',
		name: 'TheLayout',
		component: TheLayout,
		children: [
			{
				path: '/',
				name: 'Home',
				component: Home,
			},
		],
	},
	{
		path: '/not-found',
		name: 'NotFound',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	strict: true,
});

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next('/not-found');
  } else {
    next();
  }
});

export default router;