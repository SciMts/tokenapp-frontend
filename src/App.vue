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

  /*@import url(./assets/opensans/stylesheet.css);*/
  /*@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,700,800');*/
  /*@import url(./assets/open_sans/stylesheet.css);*/
  body {
    font-family: Roboto,sans-serif;
    font-size: 16px;
    font-weight: 100;
    color: #444;
    line-height: 1.8;
    padding-top:40px;
  }

  h1 {
    letter-spacing: 2px;
    display: block;
    /*letter-spacing:1.2em;*/
    margin-right: -25px;
    font-size: 3em;
    font-family: Roboto,sans-serif;
    font-weight: bold;
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

  input[type="email"]:focus,
  input[type="text"]:focus,
  input[type="password"]:focus{
    border-color: #4caef3;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
  }

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    font-family:inherit;
    line-height: 36px;
    white-space: nowrap;
    outline: 0;
    font-style: normal;
    letter-spacing: 1px;
    text-shadow: none;
    text-decoration: none;
    background-color: rgb(255, 255, 255);
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    max-width: 300px;
    margin-bottom: 10px;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    border: 1px solid #ccc;
    padding: 6px 12px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    border-radius: 8px;
    height: 48px;
    font-size: 16px;
  }

  button {
    width: 100%;
    max-width: 300px;
  }

  p {
    font-weight: 300;
    font-size: 1.3em;
    line-height: 1.6;
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
    position: absolute;
    left: 30px;
    top: 33px;
    height: 1px;
    width: 20px;
    background: url(./assets/cross.png) no-repeat 0 -9px;
    margin-top: 9px;
    opacity: 0.25;
  }
  .panel .panel-heading[aria-expanded="false"]:before {
    height: 20px;
    background: url(./assets/cross.png) no-repeat center;
    margin-top: 0;
  }

  .panel .collapsed.panel-heading:before {
    height: 20px;
    background: url(./assets/cross.png) no-repeat center;
    margin-top: 0;
  }

  .panel  div.card {
    padding: 30px;
    color: #666;
    text-align: center;
    align-items: center;
  }

  .logo-width {
    height: 80px;
  }

  .top-buffer {
    margin-top: 10px;
  }

  @media only screen and (max-width: 500px) {
    h1 {
      letter-spacing: 15px;
      margin-right: 0;
    }
  }
</style>
