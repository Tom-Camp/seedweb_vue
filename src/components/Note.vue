<template>
  <article>
    {{ note.created_date }}<br>
    {{ note.note }}
  </article>
</template>

<script>
export default {
  name: "Note",
  props: {
    note: {
      type: Object,
      required: true,
    }
  }
};
</script>