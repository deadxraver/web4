import { createRouter, createWebHistory } from 'vue-router';

import Index from '@/Main.vue';
import Console from '@/admin/Console.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Index
	},
	{
		path: '/admin',
		name: 'AdminConsole',
		component: Console
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
