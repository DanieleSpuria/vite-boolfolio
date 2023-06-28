<script>
  export default {
    name: 'ProjectCard',
    props: {
      project: Object
    }
  }
</script>

<template>
  <div class="col">
    <div class="card">
      <h2><router-link :to="{name: 'project', params: {slug: project.slug}}">{{ project.title }}</router-link></h2>
      <span>{{ project.date }}</span>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .col {
    width: calc(100% / 4);
    text-align: justify;
    
    .card {
      padding: 10px;

      a {
        color: black;
        text-decoration: none;
      }

      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; /* Imposta il numero massimo di righe visibili */
        max-height: 3.6em;
      }
    }
  }
</style>