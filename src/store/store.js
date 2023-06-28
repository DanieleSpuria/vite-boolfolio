import {reactive} from 'vue';

export const store = reactive({
  url: 'http://127.0.0.1:8000/api/',
  urlImage: 'http://127.0.0.1:8000/storage/',
  loaded: false
});