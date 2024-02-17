<template>
  <section>
    <h2>Projects</h2>
    <div class="grid">
      <ProjectGridBox
          v-for="project in projects"
          :key="project.id"
          :pid="project.id"
          :title="project.name"
          :body="project.description"
      />
    </div>
    <p class="margin-top-1"><router-link :to="{ name: 'Projects' }">View all Projects &raquo;</router-link></p>
    <router-view/>
  </section>
  <section>
    <h2>Profiles</h2>
    <div class="grid">
      <ProfileGridBox
          v-for="profile in profiles"
          :key="profile.id"
          :pid="profile.id"
          :title="profile.name"
          :colors="profile.colors"
      />
    </div>
    <p class="margin-top-1"><router-link :to="{ name: 'Profiles' }">View all Profiles &raquo;</router-link></p>
    <router-view/>
</section>
</template>

<script>
import axios from 'axios';
import ProjectGridBox from "@/components/ProjectGridBox.vue";
import ProfileGridBox from "@/components/ProfileGridBox.vue";

export default {
  name: "HomeView",
  components: {
    ProjectGridBox,
    ProfileGridBox
  },
  data () {
    return {
      projects: null,
      profiles: null
    }
  },
  mounted () {
    axios.all([
      axios.get("http://localhost:8000/projects"),
      axios.get("http://localhost:8000/profiles"),
    ])
    .then(axios.spread((projectResponse, profileResponse) => {
      this.projects = projectResponse.data;
      this.profiles = profileResponse.data;
    }))
    .catch(error => {
      console.log("Error fetching data:", error)
    });
  }
}
</script>
