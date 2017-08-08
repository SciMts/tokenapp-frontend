<template>
  <div id="overlay">
    <div class="loader">
      <pacman-loader :loading="true" color="#0c547c"></pacman-loader>
      <h3>Loading</h3>
    </div>
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
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .loader {
    position: absolute;
    top: 48%;
    left: 48%;
  }
</style>
