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
    <Note v-if="project.notes" v-for="note in project.notes" :note="note"/>
    <p v-else>There are no notes at this time.</p>
  </details>
  <section>
    <h5>Sensor Data</h5>
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
  </section>
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
