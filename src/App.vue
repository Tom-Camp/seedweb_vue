<template>
   <header>
    <nav>
      <ul>
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'Projects' }">Projects</router-link></li>
      </ul>
    </nav>
   </header>
  <router-view/>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
