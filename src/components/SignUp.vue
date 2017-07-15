<template>
  <div>
    <div v-if="this.sent">
      <p>{{this.msg }}</p>
    </div>
    <div v-else>
      <vue-form :state="formstate" @submit.prevent="onSubmit">
        <validate tag="label">
          <span>Email</span>
          <input v-model="model.email" name="email" type="email" required/>

          <field-messages name="email">
            <div slot="required">Email is a required field</div>
            <div slot="email">Email is not valid</div>
          </field-messages>
        </validate>
        <button type="submit" :disabled="this.formstate.$invalid">Submit</button>
      </vue-form>
    </div>
  </div>
</template>
<script>

  import VueForm from 'vue-form'

  var registerEndpoint = '/register'
  export default {
    name: 'signup',
    data () {
      return {
        msg: 'Sign Up token',
        formstate: {},
        model: {email: ''},
        email: 'invalid-email',
        sent: false
      }
    },
    methods: {
      onSubmit: function () {
        if (this.formstate.$invalid) {
          // alert user and exit early
          return
        }
        console.log('send')

        fetch(registerEndpoint, {method: 'post', body: this.model.email}).then(
          (response) => response.json().then((responseData) => {
            this.sent = true
          })
        ).catch(
          (error) => {
            console.error('Error sending mail. ', error)
          }
        )
      }
    },
    mixins: [VueForm]
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
