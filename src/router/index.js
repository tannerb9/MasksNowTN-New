// import { Router } from "vue-router";
import Vue from "vue";
import Home from "@/views/Home.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
