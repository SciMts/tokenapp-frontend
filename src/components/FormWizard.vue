<template>
  <div class="wizard" id="wizard">
    <div class="progress" v-bind:style="{ width: barWidth + '%' }"></div>
    <ul>
      <li :class="{active: $route.name === 'step1'}">
        <div>
          <icon name="envelope-o"></icon>
          <span>Register</span>
        </div>
      </li>

      <li :class="{active: $route.name === 'step2'}">
        <div>
          <icon name="inbox"></icon>
          <span>Confirm</span>
        </div>
      </li>

      <li :class="{active: $route.name === 'step3'}">
        <div>
          <icon name="wallet"></icon>
          <span>Wallet</span>
        </div>
      </li>

      <li :class="{active: $route.name === 'step4'}">
        <div>
          <icon name="reply-all"></icon>
          <span>Refund</span>
        </div>
      </li>

      <li :class="{active: $route.name === 'step5'}">
        <!--<p class="icon-text">Pay-In Address</p>-->
        <div>
          <icon name="btc"></icon>
          <span>Invest</span>
        </div>
      </li>

    </ul>
    <div class="container">
      <router-view class="wizard-component"></router-view>
    </div>

  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'
  import 'vue-awesome/icons/envelope-o'
  import 'vue-awesome/icons/inbox'
  import 'vue-awesome/icons/btc'
  import 'vue-awesome/icons/reply-all'

  // Custom wallet icon
  Icon.register({
    wallet: {
      width: 96,
      height: 96,
      paths: [
        {
          d: 'M54.2,35.5L22.7,19.7c-0.5-0.3-1-0.4-1.4-0.4c-1.2,0-2,0.9-2,2.5v34.5c0,2.1,1.5,4.6,3.4,5.6 l31.5,15.7c0.5,0.3,1,0.4,1.4,0.4c1.2,0,2-0.9,2-2.5V41C57.6,38.9,56,36.4,54.2,35.5z M46.1,60.2c-2.1,0-3.8-2.6-3.8-5.8 c0-3.2,1.7-5.8,3.8-5.8c2.1,0,3.8,2.6,3.8,5.8C49.9,57.6,48.2,60.2,46.1,60.2z'
        },
        {
          d: 'M72.9,18H27.8l15.3,7.7h25.9v3.8H50.8l5.1,2.5c2,1,3.7,3,4.7,5.1h8.5V41h-7.7v19.2h11.5 c2.1,0,3.8-1.7,3.8-3.8V21.8C76.8,19.7,75,18,72.9,18z'
        }
      ]
    }
  })

  const stepCount = 5

  export default {
    name: 'formwizard',
    data: function () {
      return {
        token: '',
        eth: ''
      }
    },
    computed: {
      step: function () {
        return this.$route.name.replace(/\D/g, '')
      },
      barWidth: function () {
        const unit = 100 / (2 * stepCount)
        return (2 * unit * this.step - unit)
      }
    },
    components: {
      Icon
    }
  }
</script>

<style>

  /* General Typography */

  a {
    color: #00A8E5;
  }

  /* Form Stuff */
  label {
    display: block;
  }

  button {
    background-color: #0C547C;
    border: 2px solid #0C547C;
    border-radius: 4px;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }

  button:disabled {
    background-color: #0C547C;
    opacity: 0.4;
    border-color: #0C547C;
    cursor: not-allowed;
  }

  input {
    border: 1px solid #25A9E1;
    border-radius: 8px;
  }

  /* Multi Step Breadcrumbs */

  .wizard ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    position: relative;
  }

  .wizard li {
    list-style-type: none;
    width: 100px;
    height: 100px;
    border: 3px solid #0C547C;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    transition: background 0.3s ease;
  }

  .wizard li  svg {
    width: 50%;
    height: 50%;
    color: rgba(0, 0, 0, .2);
  }

  .wizard li.active {
    background: #0C547C;
  }

  .wizard li div {
    height: 90%;
    width: 90%;

    display: table;
  }
  .wizard li.active > div,
  .wizard li.active > div > svg{
    color: white;
  }


  .wizard .wizard-component {
    margin-top: 40px;
  }

  .wizard .progress {
    background-color: #0C547C;
    height: 3px;
    position: relative;
    top: 70px;
    transition: width 0.3s ease;
  }

  @media only screen and (max-width: 500px) {
    .wizard li {
      list-style-type: none;
      width: 50px;
      height: 50px;
      border: 3px solid #0C547C;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      transition: background 0.3s ease;
    }
    .wizard li > div > span {
      display: none;
    }
    .wizard .progress {
      top:45px;
    }
    .wizard li > div > svg {
      vertical-align:middle;
      display: list-item;
    }


  }
</style>
