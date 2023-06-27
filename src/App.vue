<script>
  import Header from './components/Header.vue';

  export default {
    name: 'app',

    components: {
      Header
    }
  }     
</script>

<template>
  <main>
    <div class="container">
      <Header></Header>
      <router-view></router-view>
    </div>
  </main>
</template>

<style lang="scss">
  main{

    .container{
      width: 80%;
      margin: 0 auto;
    }
  }
</style>