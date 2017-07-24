<template>
  <div>
    <h3>Status</h3>
    <div class="row">
      <div class="col-xs-4"  v-for="(tier, index) in tiers">
        <div class="row"> Tier {{index+1}}</div>
        <div class="row">
          <img src="../assets/box-closed.svg" height="30px" v-if="tier.amount == tier.maxAmount">
          <img src="../assets/box-open.svg" height="30px" v-if="tier.amount < tier.maxAmount">
        </div>
        <div class="row">
          {{tier.amount}} / {{tier.maxAmount}}
        </div>
      </div>

    </div>

  </div>
</template>

<script>
//  import axios from 'axios'

//  var statusEndpoint = 'api/address'
  export default {
    name: 'status-comp',
    data: function () {
      return {
        tiers: [
          {
            amount: 100,
            maxAmount: 100
          },
          {
            amount: 22,
            maxAmount: 5000
          },
          {
            amount: 0,
            maxAmount: 10000
          }
        ]
      }
    },
    methods: {
      mounted: function () {
        console.log('TODO: fetch status')
      }
    }
  }
</script>
