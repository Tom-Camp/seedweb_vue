<template>
  <div v-for="rgbColor in color" class="led" :style="{ 'background-color': 'rgba(' + rgbColor + ', 1)' }"></div>
</template>

<script>
export default {
  name: "Color",
  props: {
    color: {
      type: Object,
      required: true,
    }
  }
};
</script>

<style scoped>
</style>