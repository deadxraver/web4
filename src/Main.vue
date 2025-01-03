<script setup>
import {ref} from 'vue'
import './assets/styles.css'
import {
  buttonText,
  count,
  fullName,
  group,
  groupStyle,
  login,
  nameStyle,
  variant,
  varStyle
} from './components/declareConsts.js'

function logregChange() {
  login.value = !login.value;
  buttonText.value = login.value ? 'Не зарегистрирован' : 'Уже зарегистрирован';
}

setInterval(() => {
  const date = new Date();
  count.value = date.toLocaleDateString('ru-RU') + ' ' + date.toLocaleTimeString('ru-RU');
}, 1000)
</script>

<template>
  <header>
    <p><a style="color:red" href="https://t.me/bawdyPlace">
      {{ fullName }}
    </a></p>
    <p style="color:green">
      {{ group }}
    </p>
    <p style="color:blue">
      {{ variant }}
    </p>
  </header>
  <h1 class="header">вот тут короче построим</h1>
  <div id="date-time-div" style="font-size: 50px; text-align: center">
    {{ count }}
  </div>

  <div id="formDiv">
    <form v-if="login">
      <input required type="text" placeholder="Имя пользователя">
      <br>
      <input required type="password" placeholder="Пароль">
      <br>
      <button type="submit">Войти</button>
    </form>
    <form v-else>
      <input required type="text" placeholder="Имя пользователя">
      <br>
      <input required type="password" placeholder="Пароль">
      <br>
      <input required type="password" placeholder="Повторите пароль">
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
