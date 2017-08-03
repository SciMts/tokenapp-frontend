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



  /*@import url(https://fonts.googleapis.com/css?family=Open+Sans:1/00,300,700,800);*/
  /*@import url(./assets/opensans/stylesheet.css);*/
  /*@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,700,800');*/
  /*@import url(./assets/open_sans/stylesheet.css);*/
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 100;
    color: #444;
    line-height: 1.8;
  }

  h1 {
    font-size: 35px;
    font-weight: 500;
    letter-spacing: 25px;

    display: block;
    /*letter-spacing:1.2em;*/
    margin-right: -25px;
  }

  h2 {
    line-height: 1.6;
    /*text-align:right;*/
  }

  /*h3 {*/
  /*font-size: 40px;*/
  /*font-weight: 100;*/
  /*}*/

  /*h4 {*/
  /*font-size: 30px;*/
  /*font-weight: 100;*/
  /*}*/

  h1,
  h2,
  h3,
  h4 {
    color: #222;
  }

  input {
    text-align: center;
  }

  /*#yikes-easy-mc-form-1-EMAIL, #yikes-easy-mc-form-3-EMAIL {*/
  input {
    line-height: 36px;
    font-family: Raleway, sans-serif;
    white-space: nowrap;
    outline: 0;
    font-style: normal;
    letter-spacing: 1px;
    text-shadow: none;
    text-decoration: none;
    padding: 0 23px;
    border-style: solid;
    height: 3rem;
    font-size: 13px;
    color: rgb(12, 84, 124);
    border-color: rgb(12, 84, 124);
    background-color: rgb(255, 255, 255);
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    border-radius: 4px;
    margin: 0;
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

  .panel .panel-heading {
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

  .logo-width {
    width: 415px;
  }
</style>
