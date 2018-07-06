<template>
  <div>
    <div class="logo-width" style="margin: auto;">
      <h2>Status</h2>
    </div>
    <div class="row" v-if="!errorMsg">
      <div class="col-xs-3" v-for="tier in tiers" v-bind:key="tier.name" v-bind:class="{ currentTier: tier.isCurrent }" style="padding: 12px">
        <div class="row blue">{{tier.name}}</div>
        <div class="row blue">
          <!--<img src="../assets/box-closed.svg" height="70px" v-if="tier.amount === tier.maxAmount">-->
          <div v-if="tier.amount === tier.maxAmount">
            <svg style="height: 68px; margin-top: 10px" aria-hidden="true" data-prefix="fas" data-icon="box" class="svg-inline--fa fa-box fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#2174f3" d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z"></path></svg>
          </div>
          <div v-if="tier.amount < tier.maxAmount">

            <svg style="height: 68px; margin-top: 10px" aria-hidden="true" data-prefix="fas" data-icon="box-open" class="svg-inline--fa fa-box-open fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9zm585.1 102.8L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9z"></path></svg>
          </div>
        </div>
        <div class="row blue">
          {{ Math.ceil(tier.amount / tier.maxAmount  * 100 )}}%
        </div>
        <div class="row" style="margin-top: 10px">
          <div class="token-sold">{{ tier.amount }} token sold</div>
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
    <p>Use our calculator to estimate how much EKA tokens you will receive based on your investment.</p>
    <div class="estimate-table" v-if="tiers">
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
            Discount for {{getCurrentTier() ? getCurrentTier().name : null}}: {{discount}} % <sup>2)</sup>
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
              if (tier.isCurrent) {
                this.discount = tier.discount
              }
            })
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
      },
      getCurrentTier: function () {
        return this.tiers.find(tier => tier.isCurrent)
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
    background: linear-gradient(90deg,#2273f3,#4cc4f3);
    color: white;
  }

  .currentTier{
    border: 1px solid #2273f3;
    border-radius: 15px;
  }

  .token-sold {
  color: white;
    background: linear-gradient(90deg,#2273f3,#4cc4f3);
    margin: 0 70px;
    border-radius: 7px;
    padding: 2px;
    font-size: 12px;
  }

  .blue {
    color: #2174f3
  }
</style>
