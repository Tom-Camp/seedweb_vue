<template>
  <h1 class="margin-bottom-05">{{ project.name }}</h1>
  <section>
    <b>Bed ID: {{ project.bed_id }}</b><br>
    {{ project.description }}
    <div class="grid">
      <div>Lights start: {{ project.start }}</div>
      <div>Lights end: {{ project.end }}</div>
    </div>
  </section>
  <details>
    <summary><b>Notes</b></summary>
    <Note v-for="note in project.notes" :note="note"/>
  </details>
  <details open>
    <summary><b>Sensor Data</b></summary>
    <table>
      <thead>
        <tr>
          <td></td>
          <td>Air temp.</td>
          <td>Humidity</td>
          <td>Soil Temp</td>
          <td>Moisture</td>
        </tr>
      </thead>
      <tbody>
        <SensorData v-for="sensorData in project.data" :dataRow="sensorData"/>
      </tbody>
    </table>
  </details>
  <router-link :to="{ name: 'ProjectEditLink', params: { pid: project.id } }">
    <button class="normal pico-background-green-500">Edit {{ project.name }}</button>
  </router-link>
</template>

<script>
import axios from 'axios';
import SensorData from "@/components/SensorData.vue";
import Note from "@/components/Note.vue";


export default {
  name: "ProjectLink",
  components: {
    Note,
    SensorData
  },
  data() {
    return {
      project: {}
    }
  },
  mounted() {
    const projectId = this.$route.params.pid;
    axios
      .get(`http://localhost:8000/projects/${projectId}`)
      .then(response => (this.project = response.data))
      .catch(error => {
        console.log("Error fetching data:", error)
      });
  }
}
</script>
