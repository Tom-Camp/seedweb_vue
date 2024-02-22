import { createApp } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"
import App from "./App.vue";
import HomeView from "@/views/HomeView.vue";
import ProjectCreateView from "@/views/ProjectCreateView.vue";
import ProjectsListView from "@/views/ProjectsListView.vue";
import ProjectView from "@/views/ProjectView.vue";
import ProjectEditView from "@/views/ProjectEditView.vue";
import ProfilesListView from "@/views/ProfileListView.vue";
import ProfileView from "@/views/ProfileView.vue";

const Home = { template: "<div>Home</div>" }
const Projects = { template: "<div>Projects</div>" }
const ProjectLink = { template: "<div>Project {{ $route.params.pid }}</div>" }
const ProjectCreateViewLink = { template: "<div>ProjectCreate</div>" }
const ProjectEditViewLink = { template: "<div>ProjectEdit {{ $route.params.pid }}</div>" }
const Profiles = { template: "<div>Profiles</div>" }
const ProfileLink = { template: "<div>Profile {{ $route.params.pid }}</div>" }

const routes = [
  { name: "Home", path: "/", component: HomeView },
  { name: "Projects", path: "/projects", component: ProjectsListView },
  { name: "ProjectLink", path: "/projects/:pid", component: ProjectView, props: true },
  { name: "ProjectCreateLink", path: "/projects/create", component: ProjectCreateView },
  { name: "ProjectEditLink", path: "/projects/:pid/edit", component: ProjectEditView, props: true },
  { name: "Profiles", path: "/profiles", component: ProfilesListView },
  { name: "ProfileLink", path: "/profiles/:pid", component: ProfileView, props: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount("#app")
