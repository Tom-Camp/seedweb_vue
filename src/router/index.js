import {Vue} from "vue"
import {VueRouter} from "vue-router";
import {HomeView} from "../views/HomeView.vue";
import {ProjectsView} from "../views/ProjectsListView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView
  }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router;
