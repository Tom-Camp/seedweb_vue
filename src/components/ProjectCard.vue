<template>
  <article>
    <header>
      {{ project }}: {{ project.bed_id }}
    </header>
    {{ project.description }}
  </article>
</template>

<script>
export default {
  name: "ProjectCard",
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