<template>
  <h1>Projects</h1>
  <table>
    <thead>
      <tr>
        <th scope="col">Project</th>
        <th scope="col">Description</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tr v-for="project in projects">
      <td>
        <router-link :to="{ name: 'ProjectLink', params: { pid: project.id } }">{{ project.name }}</router-link>
        <router-view/>
      </td>
      <td>{{ project.description }}</td>
      <td>Edit</td>
    </tr>
  </table>
</template>

<script>
import axios from 'axios';
import ProjectCard from "@/components/ProjectCard.vue";


export default {
  name: "ProjectsListsView",
  components: {
    ProjectCard
  },
  data () {
    return {
      projects: null
    }
  },
  mounted() {
    axios
        .get("http://localhost:8000/projects")
        .then(response => (this.projects = response.data))
  }
}
</script>
