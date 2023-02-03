import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/produtos",
      name: "products",
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/contato",
      name: "contact",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/empresa",
      name: "about",
      component: () => import("../views/About.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.name !== "home") {
      return {
        el: ".banner-features",
      };
    }
  },
});

export default router;
