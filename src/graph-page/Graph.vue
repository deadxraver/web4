<script setup>
import {isAuthorized} from "@/components/declareConsts.js";
</script>

<template>
  <div v-if="isAuthorized">
<!--    если юзер авторизирован показываем ему страничку-->
<!--    (тут будет страничка)-->
    ураааа зареганный юзер урааа
  </div>
  <div v-if="!isAuthorized">
<!--    иначе показываем пенис (условно он там попытался перейти по ссылке напрямую минуя авторизацию)-->
    <p style="color: red"> а кто это такой неавторизованный у нас тут бегает))</p>
    нука давай ка <a href="index.html">сюда</a>
  </div>
</template>

<style scoped>

</style>