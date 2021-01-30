import Vue from "vue";
import VueRouter from "vue-router";

import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageUsers from "../pages/PageUsers";
import PageLogin from "../pages/PageLogin";
import PageRegister from "../pages/PageRegister";
import PageCreateAnnounce from "../pages/PageCreateAnnounce";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: PageHome, name: "home-page" },
    { path: "/login", component: PageLogin, name: "login-page" },
    { path: "/register", component: PageRegister, name: "register-page" },
    { path: "/about", component: PageAbout, name: "about-page" },
    { path: "/members", component: PageUsers, name: "members-page" },
    {
      path: "/announces/new",
      component: PageCreateAnnounce,
      name: "create-announce-page",
      meta: { requiresAuth: true },
    },
    { path: "*", redirect: "/" },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isloggedIn = localStorage.getItem("token");
    if (!isloggedIn) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
