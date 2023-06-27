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
      <h2>{{ project.title }}</h2>
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
    }
  }
</style>