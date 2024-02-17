
<template>
  <tr>
    <td>{{ parsedData.air_temp }}&deg;</td>
    <td>{{ parsedData.humidity }}%</td>
    <td>{{ parsedData.soil_temp }}&deg;</td>
    <td>{{ parsedData.moisture }}</td>
  </tr>
</template>

<script>
export default {
  name: "SensorData",
  props: {
    dataRow: {
      type: String,
      required: true,
    }
  },
  computed: {
    parsedData() {
      try {
        return JSON.parse(this.dataRow.sensor_data);
      } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
      }
    }
  }
};
</script>