<script setup>
import {onDelete, onLogout} from "@/components/functionStorage.js";
</script>

<template>
  ураааа зареганный юзер урааа
  <button @click="onLogout">Выйти</button>
  <button style="color: red" @click="onDelete">Мне больше не нравится этот аккаунт...</button>
</template>

<style scoped>

</style>