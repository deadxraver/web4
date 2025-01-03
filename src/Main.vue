<script setup>
import {ref} from 'vue'
import './assets/styles.css'

const group = ref('P3215');
const variant = ref(44444);
const fullName = ref('Чумаченко Даниил Олегович')

const date = new Date();
const count = ref(date.toLocaleDateString('ru-RU') + ' ' + date.toLocaleTimeString('ru-RU'));
setInterval(() => {
  const date = new Date();
  count.value = date.toLocaleDateString('ru-RU') + ' ' + date.toLocaleTimeString('ru-RU');
}, 1000)
</script>

<template>
  <header>
    <p><a style="color:green" href="https://t.me/bawdyPlace">
      {{ fullName }}
    </a></p>
    <p style="color:red">
      {{ group }}
    </p>
    <p style="color:blue">
      {{ variant }}
    </p>
  </header>
  <h1 class="header">вот тут короче построим</h1>
  <div id="date-time-div" style="font-size: 50px; text-align: center">
    {{ count }}
  </div>

  <div style="text-align: center">
    <button id="submit" style="width: 50%; height: 50%">
      К графику
    </button>
  </div>

</template>

<style scoped>
</style>
