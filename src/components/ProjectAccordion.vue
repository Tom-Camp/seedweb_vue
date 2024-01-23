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
          <tr v-for="data in project.data">
            <td>{{ data.created_date }}</td>
            <td>{{ data.sensor_data.air_temp }}&deg; F</td>
            <td>{{ data.sensor_data.humidity }}%</td>
            <td>{{ data.sensor_data.soil_temp }}&deg; F</td>
            <td>{{ data.sensor_data.moisture }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </details>
</template>

<script>
export default {
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