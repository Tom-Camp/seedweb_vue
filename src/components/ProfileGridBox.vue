<template>
  <div>
    <h5 class="margin-bottom-05"><router-link :to="{ name: 'ProfileLink', params: { pid: pid } }">{{ title }}</router-link></h5>
    <router-view/>
    <Color :color="colors"/>
  </div>
</template>

<script>
import Color from "@/components/Color.vue";
export default {
  name: "ProfileGridBox",
  components: {Color},
  props: {
    title: {
      type: String,
      required: true,
    },
    colors: {
      type: String,
      required: true,
    },
    pid: {
      type: Number,
      required: true,
    }
  }
};
</script>

<style scoped>

</style>