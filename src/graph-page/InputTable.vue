<script setup>
import {checkY, r, x, y, yErrorText} from "@/graph-page/formElements.js";
import {ref} from "vue";
const pButtob = ref(null);
</script>

<template>
  <table>
    <tr>
      <th>Поле</th>
      <th>Значение</th>
    </tr>
    <tr>
      <td>X</td>
      <td>
        <select v-model="x">
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
        <input @input="checkY(pButtob)" type="number" v-model="y" placeholder="Значение от -3 до 3">
        <p style="color: red">{{ yErrorText }}</p>
      </td>
    </tr>
    <tr>
      <td>R</td>
      <td>
        <select v-model="r">
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
      <td colspan="2" style="text-align: center">
        <input ref="pButtob" class="buttob" type="submit" value="Отправить" src="img.png">
      </td>
    </tr>
  </table>
</template>

<style scoped>

</style>