<template>
  <div class="wizard" id="wizard">
    <div class="progress" v-bind:style="{ width: barWidth + '%' }"></div>
    <ul>
      <li :class="{active: $route.name === 'step1'}">
        <div>
          <img src="../assets/icons/register_active.svg" v-if="$route.name === 'step1'"/>
          <img src="../assets/icons/register.svg" v-else/>
        </div>
      </li>

      <li :class="{active: $route.name === 'step2'}">
        <div>
          <img src="../assets/icons/confirm_active.svg" v-if="$route.name === 'step2'"/>
          <img src="../assets/icons/confirm.svg" v-else>
        </div>
      </li>

      <li :class="{active: $route.name === 'step3'}">
        <div>
          <img src="../assets/icons/wallet_active.svg" v-if="$route.name === 'step3'"/>
          <img src="../assets/icons/wallet.svg" v-else>
        </div>
      </li>

      <li :class="{active: $route.name === 'step4'}">
        <div>
          <img src="../assets/icons/refund_active.svg" v-if="$route.name === 'step4'"/>
          <img src="../assets/icons/refund.svg" v-else>
        </div>
      </li>

      <li :class="{active: $route.name === 'step5'}">
        <div>
          <img src="../assets/icons/invest_active.svg" v-if="$route.name === 'step5'"/>
          <img src="../assets/icons/invest.svg" v-else>
        </div>
      </li>
    </ul>
    <div>
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
    background-color: #4caef3;
    border: 2px solid #4caef3;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }

  button:disabled {
    background-color: #2174f3;
    opacity: 0.4;
    border-color: #2174f3;
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

  .wizard ul img {
    height: 100px;
  }

  .wizard li {
    list-style-type: none;
    /*width: 100px;*/
    height: 100px;
    background: white;
    transition: background 0.3s ease;
  }

  .wizard .progress {
    background-color: #0C547C;
    height: 3px;
    position: relative;
    top: 70px;
    transition: width 0.3s ease;
  }

  @media only screen and (max-width: 600px) {
    .wizard li {
      height: 80px;
    }
    .wizard ul img {
      height: 80px;
    }
    .wizard .progress {
      top: 60px;
    }
  }
  @media only screen and (max-width: 500px) {
    .wizard li {
      height: 60px;
    }
    .wizard ul img {
      height: 60px;
    }
    .wizard .progress {
      top: 50px;
    }
  }
</style>
