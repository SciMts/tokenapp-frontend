<template>
  <div>
    <div class="logo-width" style="margin: auto;">
      <h2>Status</h2>
    </div>
    <div class="row" v-if="!errorMsg">
      <div class="col-xs-3" v-for="tier in tiers">
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
      <div class="col-xs-3" v-for="tier in tiers">
        <div class="row">{{tier.name}}</div>
        <div class="row">
          <img src="../assets/box-open.svg" height="70px">
        </div>
        <div class="row">
          ???
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'

  let statusEndpoint = 'token-status'

  export default {
    name: 'status-comp',
    data: function () {
      return {
        errorMsg: '',
        tiers: [
          {
            name: 'Pre ICO',
            amount: 0,
            maxAmount: 1050000
          },
          {
            name: 'Tier 1',
            amount: 0,
            maxAmount: 4200000
          },
          {
            name: 'Tier 2',
            amount: 0,
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
            this.setTiers(response.data)
          }).catch(err => {
            this.errorMsg = 'Oops. an error occured while loading the status'
            return err
          })
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

