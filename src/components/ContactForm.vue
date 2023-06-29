<script>
  export default {
    name: 'ContactForm',
    
    data() {
      return {
        name: '',
        email: '',
        text: ''
      }
    },

    methods: {
      sendForm() {
        const data = {
          name: this.name,
          email: this.email,
          text: this.text 
        }

        console.log(data);
      }
    }
  }
</script>

<template>
  <div class="box-email">
    <input v-model="this.name" type="text" placeholder="Insert your name">
    <input v-model="this.email" type="email" placeholder="Insert email">
    <textarea v-model="this.text" cols="30" rows="10" placeholder="Insert text"></textarea>
    <button @click="sendForm()">Submit</button>
  </div>
</template>

<style lang="scss" scoped>
  input,
  textarea {
    display: block;
    margin: 20px 0;
    width: 100%;
  }
</style>