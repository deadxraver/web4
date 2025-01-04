<script setup>
import {count, fullName, group, variant} from "@/components/declareConsts.js";
setInterval(() => {
  const date = new Date();
  count.value = date.toLocaleDateString('ru-RU') + ' ' + date.toLocaleTimeString('ru-RU');
}, 1000)
</script>

<template>
  <header>
    <p><a style="color:red" href="https://t.me/bawdyPlace">
      {{ fullName }}
    </a></p>
    <p style="color:green">
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
</template>

<style scoped>

</style>