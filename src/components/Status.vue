<template>
  <div>
    <h3>Status</h3>
    <div class="row">
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
        tiers: [
          {
            name: 'Pre ICO',
            amount: 0,
            maxAmount: 2100000
          },
          {
            name: 'Tier 1',
            amount: 0,
            maxAmount: 6000000
          },
          {
            name: 'Tier 2',
            amount: 0,
            maxAmount: 6000000
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
            console.error(err)
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

