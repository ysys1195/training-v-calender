// skl-blog/src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import selfCalender from "../components/selfCalender.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/self_calender",
    name: "selfCalender",
    component: selfCalender,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;