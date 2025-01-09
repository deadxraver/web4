<script setup>

import {url} from "@/components/declareConsts.js";
import {deleteUser, handleSubmit} from "@/admin/consoleFun.js";
import {adminPassword, adminUsername, authorized, users, userToBeRemoved} from "@/admin/consoleConsts.js";

if (adminPassword.value && adminUsername.value) {
  axios.get(`${url}/admin/auth?username=${adminUsername.value}&password=${adminPassword.value}`).then((response) => {
    console.log(response.data);
    users.value = response.data;
    authorized.value = true;
    localStorage.setItem("admin_username", adminUsername.value);
    localStorage.setItem("admin_password", adminPassword.value);
  }).catch((error) => {
    console.log(error);
    Qual.error('Ошибка', error.message);
  });
}

</script>

<template>
  <form v-if="!authorized" @submit.prevent="handleSubmit">
    <input type="text" required placeholder="admin username" v-model="adminUsername">
    <input type="password" required placeholder="admin password" v-model="adminPassword">
    <button type="submit">Войти</button>
  </form>
  <table v-if="authorized">
    <thead>
    <tr>
      <th>ID</th>
      <th>Username</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in users">
      <td>{{ item.id }}</td>
      <td>{{ item.login }}</td>
    </tr>
    </tbody>
  </table>
  <form v-if="authorized" @submit.prevent="deleteUser">
    <input type="text" required placeholder="username" v-model="userToBeRemoved">
    <button type="submit" style="color: red">УДАЛИТЬ</button>
  </form>
</template>

<style scoped>

</style>