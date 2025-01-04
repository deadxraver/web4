<script setup>
import './assets/styles.css'
import {isAuthorized} from './components/declareConsts.js'
import Graph from "@/graph-page/Graph.vue";
import Main from "@/main-page/Main.vue";

</script>

<template>
  <div id="start-page" v-if="!isAuthorized">
    <Main/>
  </div>
  <div v-else id="graph-page">
    <Graph/>
  </div>
</template>

<style scoped>

</style>
