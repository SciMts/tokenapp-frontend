<template>
  <div>
    <div class="logo-width" style="margin: auto;">
      <h2>Status</h2>
    </div>
    <div class="row" v-if="!errorMsg">
      <div class="col-xs-3" v-for="tier in tiers" v-bind:key="tier.name">
        <div class="row">{{tier.name}}</div>
        <div class="row">
          <img src="../assets/box-closed.svg" height="70px" v-if="tier.amount == tier.maxAmount">
          <img src="../assets/box-open.svg" height="70px" v-if="tier.amount < tier.maxAmount">
        </div>
        <div class="row">
          {{ Math.ceil(tier.amount / tier.maxAmount  * 100 )}}%
        </div>
      </div>
    </div>
    <div class="row" v-if="errorMsg">
      <div class="col-xs-12">
        <p class="bg-warning">We are currently unable to determine your expected bonus tier.</p>
      </div>
    </div>
    <div class="row" v-if="errorMsg">
      <div class="col-xs-3" v-for="tier in tiers" v-bind:key="tier.name">
        <div class="row">{{tier.name}}</div>
        <div class="row">
          <img src="../assets/box-open.svg" height="70px">
        </div>
        <div class="row">
          ???
        </div>
      </div>
    </div>
    <div class="logo-width" style="margin: auto;">
      <h2>Estimate tokens</h2>
    </div>
    <p>1 ETH = {{ethPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}}
      <br/>
      1 BTC = {{btcPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}}
    </p>
    <p>Price per token = {{tokenPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}}</p>
    <p>ETH investment: <input type="text" v-model="ethInvestment"/></p>
    <p>BTC investment: <input type="text" v-model="btcInvestment"/></p>
    <p>Estimated tokens: {{getTokens()}}</p>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'

  let statusEndpoint = 'status'

  export default {
    name: 'status-comp',
    data: function () {
      return {
        errorMsg: '',
        ethPrice: 0,
        btcPrice: 0,
        ethInvestment: 0,
        btcInvestment: 0,
        tokenPrice: 0.1,
        tiers: [
          {
            name: 'Pre ICO',
            amount: 1050000,
            maxAmount: 1050000
          },
          {
            name: 'Tier 1',
            amount: 10,
            maxAmount: 4200000
          },
          {
            name: 'Tier 2',
            amount: 5,
            maxAmount: 5100000
          },
          {
            name: 'Tier 3',
            amount: 0,
            maxAmount: 6000000
          }
        ]
      }
    },
    mounted: function () {
      this.getStatus()
    },
    methods: {
      getStatus: function () {
        axios.get(Vue.config.API + statusEndpoint)
          .then(response => {
            this.btcPrice = response.data.btcPrice
            this.ethPrice = response.data.ethPrice
            // this.setTiers(response.data)
          }).catch(err => {
            // this.errorMsg = 'Oops. an error occured while loading the status'
            return err
          })
      },
      getEthInvestment: function () {
        return this.ethInvestment * this.ethPrice
      },
      getBtcInvestment: function () {
        return this.btcInvestment * this.btcPrice
      },
      getTokens: function () {
        return (this.getEthInvestment() + this.getBtcInvestment()) / this.tokenPrice
      },
      setTiers: function (amount) {
        this.tiers.forEach(function (tier) {
          if (amount >= tier.maxAmount) {
            tier.amount = tier.maxAmount
            amount = amount - tier.maxAmount
          } else if (amount < tier.maxAmount) {
            tier.amount = amount
            amount = 0
          }
        })
      }
    }
  }
</script>

