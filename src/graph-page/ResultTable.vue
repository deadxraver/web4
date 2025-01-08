<script setup>

import {dots} from "@/components/declareConsts.js";
</script>

<template>
  <div id="app">
    <table class="table table-striped">
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
  </div>
</template>

<style scoped>

</style>