<script>
  import axios from 'axios';
  import {store} from '../store/store';

  export default {
    name: 'Project',
    project: null,
    
    methods: {
      getProject(endpoint) {
        axios.get(endpoint)
          .then(result => {
            this.project = result.data;
          })
      }
    },

    mounted() {
      this.getProject(store.url + 'projects/' + this.$route.params.slug);
    }
  }
</script>

<template>
  
</template>

<style>

</style>