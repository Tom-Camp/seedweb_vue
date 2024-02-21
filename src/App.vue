<template>
   <header>
    <nav>
      <ul>
        <li><router-link :to="{ name: 'Home' }"><Logo/></router-link></li>
      </ul>
      <ul>
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'Projects' }">Projects</router-link></li>
      </ul>
    </nav>
   </header>
  <router-view/>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  components: {Logo}
}
</script>

<style scoped>

</style>
