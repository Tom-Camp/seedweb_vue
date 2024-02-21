
<template>
  <tr>
    <td>{{ dataRow.created_date }}</td>
    <td>{{ dataRow.sensor_data.air_temp }}&deg;</td>
    <td>{{ dataRow.sensor_data.humidity }}%</td>
    <td>{{ dataRow.sensor_data.soil_temp }}&deg;</td>
    <td>{{ dataRow.sensor_data.moisture }}</td>
  </tr>
</template>

<script>
export default {
  name: "SensorData",
  props: {
    dataRow: {
      type: Object,
      required: true,
    }
  }
};
</script>