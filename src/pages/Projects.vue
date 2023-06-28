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
            this.projects = result.data.projects.data;
            this.links = result.data.projects.link;
            this.types = result.data.types;
            this.technologies = result.data.technologies;
          })
      },

      getTypesApi(id) {
        this.projectsApi(store.url + 'projects/types/' + id);
      },

      getTechnologiesApi(id) {
        this.projectsApi(store.url + 'projects/technologies/' + id);
      }
    },

    mounted() {
      this.projectsApi(store.url + 'projects');
    }
  }     
</script>








<template>
  <h1>Projects</h1>

  <div class="badge-box">
    <div class="badge-line">
      <h3>Types:</h3>
      <span
        v-for="type in types"
        :key="type.id"
        @click="getTypesApi(type.id)"
        class="badge badge-type"
      >{{ type.name }}</span> 
    </div>

    <div class="badge-line">
      <h3>Technologies:</h3>
      <span
        v-for="technology in technologies"
        :key="technology.id"
        @click="getTechnologiesApi(technology.id)"
        class="badge badge-technology"
      >{{ technology.name }}</span>
    </div>
  </div>

  <div class="row">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>

  <div class="button-box">
    <button
      v-for="(link, index) in links"
      :key="index"
      v-html="link.label"
      @click="projectsApi(link.url)"
      :disabled="link.active || !link.url"
    ></button>
  </div>
</template>







<style lang="scss" scoped>
  h3 {
      display: inline-block;
    }

.badge-line {
  display: flex;
  align-items: center;
}

  .badge {
    display: inline-block;
    margin: 7px;
    padding: 5px 10px;
    color: white;
    cursor: pointer;

    &:hover, &.active {
      color: black;
      background-color: red;
    }
  }

  .badge-type {
    background-color: orange;
    border-radius: 20px;
  }

  .badge-technology {
    background-color: green;
    border-radius: 20px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .button-box {
    display: flex;
    justify-content: center;
    padding: 20px;

     button {
      padding: 6px 10px;
      font-size: 19px;
      cursor: pointer;
    }
  }
</style>