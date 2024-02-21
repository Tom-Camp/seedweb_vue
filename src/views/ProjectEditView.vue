<template>
  <h1>Edit Project {{ project.name }}</h1>
  <form @submit.prevent="handleSubmit">
    <input type="text" name="name" placeholder="Name" v-model="project.name" aria-label="name" />
    <input type="text" name="bed_id" placeholder="Bed ID" v-model="project.bed_id" aria-label="bed_id" />
    <textarea
      name="description"
      placeholder="Description"
      v-model="project.description"
      aria-label="description">
    </textarea>
    <select name="profile" aria-label="Profile">
      <option v-for="profile in profiles" :key="profile.id" :value="profile.id" :selected="profileSelected(profile.id)">
        {{ profile.name }}
      </option>
    </select>
    <input type="time" name="start" aria-label="Start time" v-model="project.start" />
    <input type="time" name="end" aria-label="End time" v-model="project.end" />

    <input
      type="submit"
      value="Update"
    />
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: "ProjectEditLink",
  components: {},
  data() {
    return {
      project: {},
      profiles: {}
    }
  },

  mounted () {
    const projectId = this.$route.params.pid;
    axios.all([
      axios.get(`http://localhost:8000/projects/${projectId}`),
      axios.get("http://localhost:8000/profiles"),
    ])
    .then(axios.spread((projectResponse, profileResponse) => {
      this.project = projectResponse.data;
      this.profiles = profileResponse.data;
    }))
    .catch(error => {
      console.log("Error fetching data:", error)
    });
  },
  methods: {
    handleSubmit() {
      axios.patch(`http://localhost:8000/projects/${this.project.id}`, this.project)
        .then(response => {
          console.log('Project successfully updated:', response.data);
        })
        .catch(error => {
          console.error('Error updating Project:', error);
        });
    },
    profileSelected(profileId) {
      return profileId === this.project.profile_id;
    }
  }
}
</script>