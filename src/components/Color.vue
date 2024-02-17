<template>
  <div v-for="rgbColor in parsedJson" class="led" :style="{ 'background-color': 'rgba(' + rgbColor + ', 1)' }"></div>
</template>

<script>
export default {
  name: "Color",
  props: {
    color: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      parsedJson: null
    };
  },
  watch: {
    color: {
      immediate: true,
      handler(newVal) {
        try {
          console.log(this.color)
          this.parsedJson = JSON.parse(newVal);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      }
    }
  }
};
</script>

<style scoped>
</style>