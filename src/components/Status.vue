<template>
  <div>
    <div class="logo-width" style="margin: auto;">
      <h2>Status</h2>
    </div>
    <div class="row" v-if="!errorMsg">
      <div class="col-xs-3" v-for="tier in tiers" v-bind:key="tier.name" v-bind:class="{ currentTier: tier.isCurrent }" style="padding: 12px">
        <div class="row">{{tier.name}}</div>
        <div class="row">
          <img src="../assets/box-closed.svg" height="70px" v-if="tier.amount === tier.maxAmount">
          <img src="../assets/box-open.svg" height="70px" v-if="tier.amount < tier.maxAmount">
        </div>
        <div class="row">
          {{ Math.ceil(tier.amount / tier.maxAmount  * 100 )}}%
        </div>
        <!--<div class="row">-->
          <!--{{ tier.amount }} tokens sold-->
        <!--</div>-->
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
    <p>Use our calculator to estimate how much EKA tokens you will receive based on your investment.</p>
    <div class="estimate-table">
      <div class="estimate-row">
        <div class="estimate-row-cell">
          <span>ETH Contribution<sup>1)</sup></span>
        </div>
        <div style="flex: 1"></div>
        <div class="estimate-row-cell">
          <span><input type="number" min="0" v-model="ethInvestment"/> <span class="estimate-row-gray"> <span class="estimate-row-sign">×</span> <span class="estimate-row-middle">{{ethPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}}</span> <span class="estimate-row-sign">=</span> </span> <span class="estimate-row-right"> {{getEthInvestment().toLocaleString('en-US', { style: 'currency', currency: 'USD' })}} </span> </span>
        </div>
      </div>
      <div class="estimate-row">
        <div class="estimate-row-cell">
          <span>
            BTC Contribution<sup>1)</sup>
          </span>
        </div>
        <div style="flex: 1"></div>
        <div class="estimate-row-cell">
          <span>
            <input type="number" min="0" step="0.1" v-model="btcInvestment"/> <span class="estimate-row-gray"> <span class="estimate-row-sign">×</span> <span class="estimate-row-middle">{{btcPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}}</span> <span class="estimate-row-sign">=</span> </span> <span class="estimate-row-right">{{getBtcInvestment().toLocaleString('en-US', { style: 'currency', currency: 'USD' })}}</span>
          </span>
        </div>
      </div>
      <div class="estimate-row" style="border-bottom-width: 2px">
        <div class="estimate-row-cell">
          <strong>Total investment</strong>
        </div>
        <div style="flex: 1"></div>
        <div class="estimate-row-cell">
          <strong>{{getInvestment().toLocaleString('en-US', { style: 'currency', currency: 'USD' })}}</strong>
        </div>
      </div>
      <div class="estimate-row">
        <div class="estimate-row-cell">
          <span>
          Price per token
          </span>
        </div>
        <div style="flex: 1"></div>
        <div class="estimate-row-cell">
          <span>
            {{tokenPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}}
          </span>
        </div>
      </div>
      <div class="estimate-row">
        <div class="estimate-row-cell">
          <span style="color: #685de4">
          Discount for Tier 1: 20%<sup>2)</sup>
          </span>
        </div>
        <div style="flex: 1"></div>
        <div class="estimate-row-cell" style="color: #685de4">
          <span class="estimate-row-sign">
          −
          </span>
          <span class="estimate-row-right">
           {{(discount * tokenPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}}
          </span>
        </div>
      </div>
      <div class="estimate-row" style="border-bottom-width: 0px">
        <div class="estimate-row-cell">
          <span>
          <strong>Discounted token price</strong>
          </span>
        </div>
        <div style="flex: 1"></div>
        <div class="estimate-row-cell">
          <span>
          <strong>{{getDiscountedTokenPrice().toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 3})}}</strong>
          </span>
        </div>
      </div>
      <div class="estimate-row final-cell">
        <div class="estimate-row-cell">
          <strong>
          Estimated EKA tokens
          </strong>
        </div>
        <div style="flex: 1"></div>
        <div class="estimate-row-cell">
          <span>{{getInvestment().toLocaleString('en-US', { style: 'currency', currency: 'USD' })}}</span>
          <span><span class="estimate-row-sign">÷</span> <span class="estimate-row-middle">{{getDiscountedTokenPrice().toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 3})}}</span></span>
          <span class="estimate-row-sign">=</span>
          <span class="estimate-row-right">
            <strong>
            {{getTokens().toLocaleString('en-US', { style: 'currency', currency: 'USD' }).substr(1)}} EKA
            </strong>
          </span>
        </div>
      </div>
  </div>
  <div class="disclaimer">
      1) Non-binding live prices. The prices at the time of your deposit will determine the actual amount of EKA tokens you'll receive. <br/>
      2) Live discount rate. The discount rate may be lower at the time of your deposit, or your investment might fill the total amount of tokens available at certain tier, which might decrease the discount for the rest of your investment.
    </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'

  let tiersEndpoint = 'tiers'
  let ratesEndPoint = 'rates/current'

  export default {
    name: 'status-comp',
    data: function () {
      return {
        errorMsg: '',
        ethPrice: 0,
        btcPrice: 0,
        discount: 0.2,
        ethInvestment: 0,
        btcInvestment: 0,
        tokenPrice: 0.1,
        // tiers: [
        //   {
        //     name: 'Pre ICO',
        //     amount: 1050000,
        //     maxAmount: 1050000
        //   },
        //   {
        //     name: 'Tier 1',
        //     amount: 10,
        //     maxAmount: 4200000
        //   },
        //   {
        //     name: 'Tier 2',
        //     amount: 5,
        //     maxAmount: 5100000
        //   },
        //   {
        //     name: 'Tier 3',
        //     amount: 0,
        //     maxAmount: 6000000
        //   }
        // ]
        tiers: []
      }
    },
    mounted: function () {
      this.getStatus()
      setInterval(() => {
        this.getStatus()
      }, 10000)
    },
    methods: {
      getStatus: function () {
        axios.get(Vue.config.API + tiersEndpoint)
          .then(response => {
            // this.btcPrice = response.data.btcPrice
            // this.ethPrice = response.data.ethPrice
            // this.setTiers(response.data)
            this.tiers = response.data
            this.tiers.forEach(tier => {
              const currentIsoDate = new Date().toISOString().split('T')[0]
              tier.isCurrent = tier.startDate <= currentIsoDate && tier.endDate >= currentIsoDate
            })

            console.log(this.tiers)
          }).catch(err => {
            // this.errorMsg = 'Oops. an error occured while loading the status'
            return err
          })
      },

      getRates: function () {
        axios.get(Vue.config.API + ratesEndPoint).then(response => {
          // successfull
          return response
        }).catch(err => {
          return err
        })
      },
      getEthInvestment: function () {
        return this.ethInvestment * this.ethPrice
      },
      getBtcInvestment: function () {
        return this.btcInvestment * this.btcPrice
      },
      getInvestment: function () {
        return this.getEthInvestment() + this.getBtcInvestment()
      },
      getDiscountedTokenPrice: function () {
        return this.tokenPrice * (1 - this.discount)
      },
      getTokens: function () {
        return this.getInvestment() / this.tokenPrice
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

<style>
  .estimate-table {
    border: 1px solid black;
    border-bottom-width: 0;
    max-width: 600px;
    margin: auto;
    font-weight: 400;
  }
  .estimate-row {
    border-bottom: 1px solid black;
    display: flex;
    padding: 5px 10px;
    text-align: left;
  }
  input[type=number] {
    width: 80px;
    height: 40px;
    padding: 0;
    font-size: 16px;
    line-height: 16px;
    margin-bottom: -5px;
    margin-top: -5px;
    border-radius: 0;
    border-width: 0;
    text-align: right;
    background: linear-gradient(90deg, white, rgba(76, 174, 243, 0.2));
  }
  .estimate-row-gray {
    color: rgba(0, 0, 0, 0.6);
  }
  .estimate-row-sign {
    text-align: right;
    width: 15px;
    display: inline-block;
  }
  .estimate-row-middle {
    text-align: right;
    width: 90px;
    display: inline-block;
  }
  .estimate-row-right {
    text-align: right;
    width: 130px;
    display: inline-block;
  }
  .disclaimer {
    max-width: 600px;
    margin: auto;
    text-align: left;
    color: rgba(0, 0, 0, 0.4);
    font-size: 12px;
    margin-top: 15px;
  }
  .final-cell {
    background: linear-gradient(90deg,#685de4,#4caef3);
    color: white;
  }

  .currentTier{
    border: 1px solid #01527e;
    border-radius: 15px;
  }
</style>
