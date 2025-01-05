<script setup>
import './assets/styles.css'
import {isAuthorized} from './components/declareConsts.js'
import Graph from "@/graph-page/MainPage.vue";
import Main from "@/auth-page/Auth.vue";

</script>

<template>
  <Main v-if="!isAuthorized"/>
  <Graph v-else/>
</template>

<style scoped>

</style>
