<script setup>
import './CanvasDrawer.js'
window.onload = () => {
  window.canvasDrawer = new CanvasDrawer();
  window.canvasDrawer.redrawAll(1);
}
</script>

<template>
  <canvas id="canvas" width="450px" height="450px"></canvas>
</template>

<style scoped>

</style>