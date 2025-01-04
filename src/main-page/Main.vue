<script setup>
import '../assets/styles.css'
import {
  buttonText,
  isAuthorized,
  login,
  loginValue,
  passwordConfirm,
  passwordValue
} from '../components/declareConsts.js'
import {
  logregChange,
  onLogin,
  onLoginInput,
  onPasswordConfirm,
  onPasswordInput,
  onRegistration
} from '../components/functionStorage.js'
import Header from "@/main-page/Header.vue";
import Graph from "@/graph-page/Graph.vue";

</script>

<template>
  <div id="start-page" v-if="!isAuthorized">
    <Header/>
    <div id="formDiv">
      <form v-if="login" @submit.prevent="onLogin">
        <input required type="text" placeholder="Имя пользователя" v-model="loginValue" @input="onLoginInput">
        <br>
        <input required type="password" placeholder="Пароль" v-model="passwordValue" @input="onPasswordInput">
        <br>
        <button type="submit">Войти</button>
        <!--      TODO: make login-->
      </form>
      <form v-else @submit.prevent="onRegistration">
        <input required type="text" placeholder="Имя пользователя" v-model="loginValue" @input="onLoginInput">
        <br>
        <input required type="password" placeholder="Пароль" v-model="passwordValue" @input="onPasswordInput">
        <br>
        <input required type="password" placeholder="Повторите пароль" v-model="passwordConfirm"
               @input="onPasswordConfirm">
        <br>
        <button type="submit">Зарегистрироваться</button>
        <!--      TODO: make normal reg-->
      </form>
      <button @click="logregChange">{{ buttonText }}</button>
    </div>
  </div>

  <div v-else id="graph-page">
    <Graph/>
  </div>

</template>

<style scoped>
#formDiv {
  text-align: center;
}
</style>
