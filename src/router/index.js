import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import PostAJob from '../views/PostAJob.vue';
import JobListing from '../views/JobListing.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/post-a-job',
    name: 'PostAJob',
    component: PostAJob,
  },
  {
    path: '/job-listing',
    name: 'JobListing',
    component: JobListing,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
