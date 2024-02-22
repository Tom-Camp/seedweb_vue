<template>
  <h1>Confirm Delete</h1>
  <p><b>Are you sure that you'd like to Project {{ project.name }}?</b></p>
  <form @submit.prevent="handleSubmit">
    <input
      type="submit"
      value="Confirm Delete"
    />
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: "ProjectDeleteLink",
  components: {},
  data() {
    return {
      project: {}
    }
  },
  mounted () {
    const projectId = this.$route.params.pid;
    axios
      .get(`http://localhost:8000/projects/${projectId}/`)
      .then(response => (this.project = response.data))
      .catch(error => {
        console.log("Error fetching project:", error)
      });
  },
  methods: {
    handleSubmit() {
      axios.delete(`http://localhost:8000/projects/${this.project.id}/`, this.project)
        .then(response => {
          this.$router.push({ name: "Projects"});
        })
        .catch(error => {
          console.error('Error updating Project:', error);
        });
    }
  }
}
</script>