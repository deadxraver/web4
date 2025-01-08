<script setup>
import './assets/styles.css'
import {isAuthorized} from './components/declareConsts.js'
import Graph from "@/graph-page/Graph.vue";
import Main from "@/auth-page/Auth.vue";
import {onDelete, onLogout} from "@/components/logregListeners.js";
import InputTable from "@/graph-page/InputTable.vue";
import ResultTable from "@/graph-page/ResultTable.vue";
import {deleteDots} from "@/graph-page/formElements.js";

</script>

<template>
  <Main v-if="!isAuthorized"/>
  <InputTable v-if="isAuthorized"/>
  <Graph/>
  <ResultTable v-if="isAuthorized"/>
  <div style="border: 2px red;">
    <button v-if="isAuthorized" @click="onLogout">Выйти</button>
    <button v-if="isAuthorized" style="color: darkorange" @click="deleteDots">Слишком много точек</button>
    <button v-if="isAuthorized" style="color: red" @click="onDelete">Мне больше не нравится этот аккаунт...</button>
  </div>
</template>

<style scoped>

</style>
