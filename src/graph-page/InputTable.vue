<script setup>
import {handleSubmit, r, x, y} from "@/graph-page/formElements.js";
import {ref} from "vue";

const pButtob = ref(null);
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <table>
      <tr>
        <th>Поле</th>
        <th>Значение</th>
      </tr>
      <tr>
        <td>X</td>
        <td>
          <select required v-model="x">
            <option>-4</option>
            <option>-3</option>
            <option>-2</option>
            <option>-1</option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Y</td>
        <td>
          <input required  type="number" v-model="y" placeholder="Значение от -3 до 3" min="-3" max="3" step="any">
        </td>
      </tr>
      <tr>
        <td>R</td>
        <td>
          <select required v-model="r">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="text-align: center">
          <input ref="pButtob" class="buttob" type="submit" value="СТРЕЛЯЙ">
        </td>
      </tr>
    </table>
  </form>
</template>

<style scoped>

</style>