<script>
  export default {
    name: 'header'    
  }
</script>

<template>
  <header>
    <nav>
      <router-link :to="{name: 'home'}">Home</router-link>
      <router-link :to="{name: 'projects'}">Projects</router-link>
      <router-link :to="{name: 'contacts'}">Contacts</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  nav {
    padding: 10px;
    a {
    padding: 10px;
    color: black;
    text-decoration: none;

      &:hover, &.active {
        color: blue;
      }
    }
  }
</style>