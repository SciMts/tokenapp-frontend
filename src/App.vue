<template>
  <div id="app" class="text-center">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:1/00,300,700,800);

  body {
    font-family: 'Open Sans', sans-serif !important;
    font-size: 16px;
    font-weight: 100;
    color: #444;
    line-height: 1.8;
  }

  h1 {
    font-size: 80px;
    font-weight: 800;
  }

  h2 {
    font-size: 50px;
    font-weight: 800;
  }

  h3 {
    font-size: 40px;
    font-weight: 100;
  }

  h4 {
    font-size: 30px;
    font-weight: 100;
  }

  h1,
  h2,
  h3,
  h4 {
    color: #222;
    text-transform: uppercase;
  }

  input {
    text-align: center;
  }

  .panel {
    background: #f8f8f8;
    border-radius: 0;
    box-shadow: none;
    border: none;
    margin-bottom: 40px;
    text-align: left;
  }

  .panel > a {
    text-decoration: none;
  }

  .panel .panel-heading{
    color: #222;
    background: #eeeeee;
    padding: 25px 25px 25px 75px;
    display: block;
    position: relative;
    font-size: 20px;
    border: 0;
    border-radius: 0;
  }


  .panel .panel-heading:before {
    content: "";
    display: block;
    position: absolute;
    left: 30px;
    top: 33px;
    height: 1px;
    width: 20px;
    background: url(./assets/cross.png) no-repeat 0 -9px;
    margin-top: 9px;
    opacity: 0.25;
  }

  .panel .collapsed.panel-heading:before {
    height: 20px;
    background: url(./assets/cross.png) no-repeat center;
    margin-top: 0;
  }

  .panel .panel-body {
    padding: 30px;
    color: #666;
    text-align: center;
    align-items: center;
    align: center;
  }
</style>
