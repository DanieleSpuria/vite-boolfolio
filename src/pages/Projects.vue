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
        links: [],
        types: [],
        technologies: []
      }
    },

    methods: {
      projectsApi(endpoint) {
        axios.get(endpoint)
          .then(result => {
            this.projects = result.data.data;
            this.links = result.data.links;
          })
      },

      typeApi(endpoint) {
        axios.get(endpoint)
          .then(result => {
            this.types = result.data;
          })
      },

      technologiesApi(endpoint) {
        axios.get(endpoint)
          .then(result => {
            this.technologies = result.data;
          })
      }
    },

    mounted() {
      this.projectsApi(store.url + 'projects');
      this.typeApi(store.url + 'projects/types');
      this.technologiesApi(store.url + 'projects/technologies');
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