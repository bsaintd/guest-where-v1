import { createRouter, createWebHistory } from 'vue-router';
import Property from './views/Property.vue';

const routes = [
  { path: '/property/:id', name: 'Property', component: Property },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;