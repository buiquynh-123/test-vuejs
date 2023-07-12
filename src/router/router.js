import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    meta: {
      layout: "default",
    },
    name: "Home",
    component: Home,
  },
  {
    path: "/signal",
    name: "Signal",
    meta: {
      layout: "default",
    },
    component: () => import("../views/Signal.vue"),
  },
  {
    path: "/help",
    name: "Help",
    meta: {
      layout: "default",
    },
    component: () => import("../views/Help.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    meta: {
      layout: "default",
    },
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/developers",
    name: "Developers",
    meta: {
      layout: "default",
    },
    component: () => import("../views/Developers.vue"),
  },
  {
    path: "/careers",
    name: "Careers",
    meta: {
      layout: "default",
    },
    component: () => import("../views/Careers.vue"),
  },
  {
    path: "/donate",
    name: "Donate",
    meta: {
      layout: "default",
    },
    component: () => import("../views/Donate.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
