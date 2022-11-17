// skl-blog/src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import selfCalender from "../components/selfCalender.vue";
import accordion from "../components/Accordion.vue"

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
  {
    path: "/accordion",
    name: "accordion",
    component: accordion,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;