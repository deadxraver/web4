<script setup>
import './assets/styles.css'
import {isAuthorized} from './components/declareConsts.js'
import Graph from "@/graph-page/Graph.vue";
import Main from "@/auth-page/Auth.vue";
import {onDelete, onLogout} from "@/components/logregListeners.js";
import InputTable from "@/graph-page/InputTable.vue";
import ResultTable from "@/graph-page/ResultTable.vue";

</script>

<template>
  <Main v-if="!isAuthorized"/>
  <button v-if="isAuthorized" @click="onLogout">Выйти</button>
  <button v-if="isAuthorized" style="color: red" @click="onDelete">Мне больше не нравится этот аккаунт...</button>
  <InputTable v-if="isAuthorized"/>
  <Graph/>
  <ResultTable v-if="isAuthorized"/>
</template>

<style scoped>

</style>
