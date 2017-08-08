<template>
  <div id="overlay">
    <pacman-loader :loading="true" color="#0c547c"></pacman-loader>
  </div>
</template>

<script>
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'

export default {
  components: {
    PacmanLoader
  }
}
</script>

<style lang="css" scoped>
  #overlay {
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
    background-color: rgba(255, 255, 255, .5);
    transition: opacity .3s ease;
  }
</style>
