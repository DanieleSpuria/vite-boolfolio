<script>
  import axios from 'axios';
  import {store} from '../store/store';

  export default {
    name: 'Project',

    data() {
      return {
        project: null,
        store
      }
    },
    
    methods: {
      getProject(endpoint) {
        store.loaded = false;
        axios.get(endpoint)
          .then(result => {
            this.project = result.data;
            store.loaded = true
            console.log(this.project);
          })
      }
    },

    mounted() {
      this.getProject(store.url + 'projects/' + this.$route.params.slug);
    }
  }
</script>

<template>
 <div v-if="store.loaded">
  <h3>{{ project.title }}</h3>

  <span
    v-if="project.type"
    class="badge badge-type"
  >{{ project.type.name }}</span>

  <span
    v-show="project.technologies"
    v-for="technology in project.technologies"
    :key="technology.id"
    class="badge badge-technology"
  >{{ technology.name }}</span>

  <span>{{ project.date }}</span>

  <img :src="store.urlImage + project.image_path" :alt="project.image_name">

  {{ project.image_path }}

  <p>{{ project.description }}</p>

 </div>  
</template>

<style lang="scss" scoped>
  span:last-of-type {
    display: block;
  }

  img {
    width: 100%;
  }
</style>