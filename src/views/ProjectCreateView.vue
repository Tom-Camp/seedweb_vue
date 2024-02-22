<template>
  <h1>Create Project</h1>
  <form id="project-create" @submit.prevent="handleSubmit">
    <input type="text" name="name" placeholder="Name" v-model="formData.name" aria-label="name" />
    <input type="text" name="bed_id" placeholder="Bed ID" v-model="formData.bed_id" aria-label="bed_id" />
    <textarea
      name="description"
      placeholder="Description"
      v-model="formData.description"
      aria-label="description">
    </textarea>
    <select name="profile_id" aria-label="Profile" v-model="formData.profile_id">
      <option selected disabled value="">
        Select a Profile...
      </option>
      <option v-for="profile in profiles" :key="profile.id" :value="profile.id">
        {{ profile.name }}
      </option>
    </select>
    <input type="time" name="start" aria-label="Start time" v-model="formData.start" />
    <input type="time" name="end" aria-label="End time" v-model="formData.end" />

    <input
      type="submit"
      value="Create Project"
    />
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: "ProjectCreateLink",
  components: {},
  data() {
    return {
      formData: {
        name: "",
        bed_id: "",
        description: "",
        profile_id: "",
        start: "",
        end: "",
      },
      profiles: {}
    }
  },
  mounted () {
    axios
      .get("http://127.0.0.1:8000/profiles/")
      .then(response => (this.profiles = response.data))
      .catch(error => {
        console.log("Error fetchiformDatang data:", error)
      });
  },
  methods: {
    handleSubmit() {
      // console.log(this.formData);
      // const jsonData = JSON.stringify(this.formData);
      // console.log(jsonData);
      axios.post(`http://localhost:8000/projects/`, this.formData)
        .then(response => {
          this.$router.push({ name: "ProjectLink", params: { pid: response.data.id } });
        })
        .catch(error => {
          console.error('Error creating Project:', error);
        });
    }
  }
}
</script>