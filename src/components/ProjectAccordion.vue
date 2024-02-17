<template>
  <details class="accordion">
    <summary class="accordion-header">
      <hgroup>
        <h4>{{ project.name }}: {{ project.bed_id }}</h4>
        <p>{{ project.updated }}</p>
      </hgroup>
    </summary>
    <div class="accordion-body">
      {{ project.description }}
      <table role="grid">
        <thead>
          <tr>
            <td></td>
            <td>Air Temp.</td>
            <td>Humidity</td>
            <td>Soil Temp.</td>
            <td>Soil Moisture</td>
          </tr>
        </thead>
        <tbody>
          <SensorData :dataRow="project.sensor_data"  />
        </tbody>
      </table>
    </div>
  </details>
</template>

<script>
import SensorData from "@/components/SensorData.vue";
export default {
  name: "ProjectAccordion",
  components: {
    SensorData,
  },
  props: {
    project: {
      type: Object,
      required: true,
    }
  }
};
</script>

<style scoped>

</style>