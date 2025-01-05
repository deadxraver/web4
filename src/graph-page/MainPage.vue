<script setup>
import {onDelete, onLogout} from "@/components/logregListeners.js";
import InputTable from "@/graph-page/InputTable.vue";
</script>

<template>
  ураааа зареганный юзер урааа
  <button @click="onLogout">Выйти</button>
  <button style="color: red" @click="onDelete">Мне больше не нравится этот аккаунт...</button>
  <InputTable/>
</template>

<style scoped>

</style>