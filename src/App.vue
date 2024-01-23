<template>
  <main>
    <ProjectAccordion
        v-for="project in projects"
        :key="project.id"
        :project="project"
    />
  </main>
</template>

<script>
import ProjectAccordion from "@/components/ProjectAccordion.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    ProjectAccordion
  },
  data () {
    return {
      projects: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:5000/api/')
      .then(response => (this.projects = response.data))
  }
}
</script>

<style scoped>

</style>
