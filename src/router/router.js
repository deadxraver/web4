import { createRouter, createWebHistory } from 'vue-router';

import Index from '@/Main.vue';
import Console from '@/admin/Console.vue';
import NotFound from "@/components/NotFound.vue";

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
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
