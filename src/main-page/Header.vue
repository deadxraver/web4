<script setup>
import {count, fullName, group, variant} from "@/components/declareConsts.js";
import {onMounted, ref} from "vue";

setInterval(() => {
  const date = new Date();
  count.value = date.toLocaleDateString('ru-RU') + ' ' + date.toLocaleTimeString('ru-RU');
}, 1000);

const pFullName = ref(null);
const pGroup = ref(null);
const pVariant = ref(null);

onMounted(() => {
  pFullName.value.style = `color:rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
  pGroup.value.style = `color:rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
  pVariant.value.style = `color:rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
})

</script>

<template>
  <header>
    <p><a ref="pFullName" href="https://t.me/bawdyPlace">
      {{ fullName }}
    </a></p>
    <p ref="pGroup">
      {{ group }}
    </p>
    <p ref="pVariant">
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