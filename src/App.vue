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
          })
      }
    },

    mounted() {
      this.api(this.url + 'projects');
    }
    
    
  }     
</script>

<template>
  <main>
    <h1>Projects</h1>
    <ul>
      <li
        v-for="project in projects"
        :key="project.id"
      >{{ project.title }}</li>
    </ul>
  </main>
</template>

<style>

</style>