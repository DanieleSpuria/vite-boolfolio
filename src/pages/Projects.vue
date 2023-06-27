<script>
import axios from 'axios';
import {store} from '../store/store';
import ProjectCard from '../components/ProjectCard.vue';

  export default {
    name: 'projects',
    components: {
      ProjectCard
    },

    data() {
      return {
        projects: [],
        links: []
      }
    },

    methods: {
      api(endpoint) {
        axios.get(endpoint)
          .then(results => {
            this.projects = results.data.data;
            this.links = results.data.links;
          })
      }
    },

    mounted() {
      this.api(store.url + 'projects');
    }
  }     
</script>

<template>
  <h1>Projects</h1>
  <div class="row">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
  <button
    v-for="(link, index) in links"
    :key="index"
    v-html="link.label"
    @click="api(link.url)"
    :disabled="link.active || !link.url"
  ></button>
</template>

<style lang="scss" scoped>
  .row {
  display: flex;
  flex-wrap: wrap;
}
</style>