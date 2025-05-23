import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index.vue";
import Countries from "@/views/countries.vue";
import Country from "@/views/country.vue";
import Medals from "@/views/medals.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/countries",
      name: "countries",
      component: Countries,
    },
    {
      path: "/country",
      name: "country",
      component: Country,
    },
    {
      path: "/medals",
      name: "medals",
      component: Medals,
    },
    // {
    //   path: "/about/",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: AboutView,
    // },
  ],
});

export default router;
