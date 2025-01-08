<script setup>
import {onDelete, onLogout} from "@/components/logregListeners.js";
import InputTable from "@/graph-page/InputTable.vue";
import Graph from "@/graph-page/Graph.vue";
</script>

<template>
  ураааа зареганный юзер урааа
  <button @click="onLogout">Выйти</button>
  <button style="color: red" @click="onDelete">Мне больше не нравится этот аккаунт...</button>
  <InputTable/>
  <Graph/>
</template>

<style scoped>

</style>