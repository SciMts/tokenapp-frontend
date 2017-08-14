<template>
  <div id="overlay">
    <div id="box">
      <h3>You seem to be using an unsupported browser</h3>
      <p>In order to continue please try again with a supported browser</p>
      <div class="row">
        <div class="col-md-3">
          <img class="image unsupported" src="../assets/ie.png">
          <p>IE / Edge</p>
        </div>
        <div class="col-md-3">
          <img class="image" src="../assets/chrome.png">
          <p>Chrome</p>
        </div>
        <div class="col-md-3">
          <img class="image" src="../assets/firefox.png">
          <p>Firefox</p>
        </div>
        <div class="col-md-3">
          <img class="image" src="../assets/safari.png">
          <p>Safari</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>

  .image {
    height: 80px;
    margin-bottom: 10px;
  }

  .unsupported {
    opacity: 0.2;
  }

  #box {
    padding: 20px;
    border: 2px solid black;
    border-radius: 25px;
    background-color: #fff;
    color: #0C547C;
  }

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
