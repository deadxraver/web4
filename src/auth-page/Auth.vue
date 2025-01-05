<script setup>
import '../assets/styles.css'
import {
  buttonText, isAuthorized,
  login,
  loginValue,
  passwordConfirm,
  passwordValue, url
} from '../components/declareConsts.js'
import {
  logregChange,
  onLogin,
  onLoginInput,
  onPasswordConfirm,
  onPasswordInput,
  onRegistration
} from '../components/functionStorage.js'
import Header from "@/auth-page/Header.vue";

let localLogin = localStorage.getItem('login');
let localPassword = localStorage.getItem('password');
if (localLogin && localPassword ) {
  let resp = axios.get(`${url}/auth/login?login=${localLogin}&password=${localPassword}`);
  resp.then(function(value) {
    console.log(value);
    if (value.data === "Logged in") {
      isAuthorized.value = true;
      document.title = 'копаюсь... в чреве кита... грязюку всю';
    }
  });
}

</script>

<template>
  <Header/>
  <div id="formDiv">
    <form v-if="login" @submit.prevent="onLogin">
      <input required type="text" placeholder="Имя пользователя" v-model="loginValue" @input="onLoginInput">
      <br>
      <input required type="password" placeholder="Пароль" v-model="passwordValue" @input="onPasswordInput">
      <br>
      <button type="submit">Войти</button>
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
    </form>
    <button @click="logregChange">{{ buttonText }}</button>
  </div>
</template>

<style scoped>
#formDiv {
  text-align: center;
}
</style>
