<template>
  <section>
    <h2>Projects</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">Project</th>
          <th scope="col">Description</th>
          <th scope="col">Start</th>
          <th scope="col">End</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects">
          <td>
            <router-link :to="{ name: 'ProjectLink', params: { pid: project.id } }">{{ project.name }}</router-link>
            <router-view/>
          </td>
          <td>{{ project.description }}</td>
          <td>{{ project.start }}</td>
          <td>{{ project.end }}</td>
        </tr>
      </tbody>
    </table>
    <p class="margin-top-1"><router-link :to="{ name: 'Projects' }">View all Projects &raquo;</router-link></p>
    <router-view/>
  </section>
  <section>
    <h2>Profiles</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">Profile</th>
          <th scope="col">Color pattern</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="profile in profiles">
          <td>
            <router-link :to="{ name: 'ProfileLink', params: { pid: profile.id } }">{{ profile.name }}</router-link>
            <router-view/>
          </td>
          <td><Color :color="profile.colors"/></td>
        </tr>
      </tbody>
    </table>
    <p class="margin-top-1"><router-link :to="{ name: 'Profiles' }">View all Profiles &raquo;</router-link></p>
    <router-view/>
</section>
</template>

<script>
import axios from 'axios';
import ProjectGridBox from "@/components/ProjectGridBox.vue";
import ProfileGridBox from "@/components/ProfileGridBox.vue";
import Color from "@/components/Color.vue";

export default {
  name: "HomeView",
  components: {
    Color,
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
