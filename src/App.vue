<script>
import axios from 'axios';

  export default {
    name: 'home',

    data() {
      return {
        url: 'http://127.0.0.1:8000/api/',
        projects: []
      }
    },

    methods: {
      api(endpoint) {
        axios.get(endpoint)
          .then(results => {
            this.projects = results.data.data;
            console.log(this.projects);
          })
      }
    },

    mounted() {
      this.api(this.url + 'projects');
    }
    
    
  }     
</script>

<template>

</template>

<style>

</style>