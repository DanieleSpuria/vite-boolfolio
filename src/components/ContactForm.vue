<script>
  import axios from 'axios';
  import {store} from '../store/store';

  export default {
    name: 'ContactForm',
    
    data() {
      return {
        name: '',
        email: '',
        text: '',
        errors: {},
        success: false
      }
    },

    methods: {
      sendForm() {
        const data = {
          name: this.name,
          email: this.email,
          text: this.text 
        }
        axios.post(store.url + 'contacts/', data)
          .then(result => {
            this.success = false;
            if (result.data.errors) {
              this.errors = result.data.errors;
            } else {
              this.errors =  {};
              this.success = true;
            }
          })
      }
    }
  }
</script>

<template>
  <span v-if="success">Email inviata correttamente!</span>

  <div v-else class="box-email">
    <label for="name">Name</label>
    <input v-model="this.name" type="text" placeholder="Insert your name">
    <span v-for="(error, index) in errors.name" :key="index">{{ error }}</span>

    <label for="email">Email</label>
    <input v-model="this.email" type="email" placeholder="Insert email">
    <span v-for="(error, index) in errors.email" :key="index">{{ error }}</span>

    <label for="text">Text</label>
    <textarea v-model="this.text" cols="30" rows="10" placeholder="Insert text"></textarea>
    <span v-for="(error, index) in errors.text" :key="index">{{ error }}</span>

    <button @click="sendForm()">Submit</button>
  </div>
</template>

<style lang="scss" scoped>
  input,
  textarea {
    display: block;
    margin-bottom: 10px;
    width: 100%;
  }

  span {
    display: block;
  }
</style>