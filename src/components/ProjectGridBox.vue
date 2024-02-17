<template>
  <div>
    <h5><router-link :to="{ name: 'ProjectLink', params: { pid: pid } }">{{ title }}</router-link></h5>
    <router-view/>
    {{ body }}
  </div>
</template>

<script>
export default {
  name: "ProjectGridBox",
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
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