<script setup>

import {dots} from "@/components/declareConsts.js";
</script>

<template>
  <table>
    <thead>
    <tr>
      <th>X</th>
      <th>Y</th>
      <th>R</th>
      <th>Попадание</th>
      <th>Время выполнения скрипта</th>
      <th>Текущее время</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in dots">
      <td>{{ item.x }}</td>
      <td>{{ item.y }}</td>
      <td>{{ item.r }}</td>
      <td>{{ item.hit ? "Да!!!" : "Нет(" }}</td>
      <td>{{ item.execTime }}</td>
      <td>{{ item.curTime }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>