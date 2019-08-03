import Vue from "vue";
import Router from "vue-router";
import signUp from "./views/signUp.vue";
import dashboard from "./views/dashboard.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "signUp",
      component: signUp
    },
    {
      path: "/dashboard",
      name: "dashboard",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: dashboard
    }
  ]
});
