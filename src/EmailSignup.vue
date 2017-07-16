<template>
  <div>
    <form>
      <h2>Sign Up as Investor</h2>
      <fieldset class="form-group">
        <label  for="email">Email</label>
        <input id="email"
               required="required"
               v-model="email"
               v-on:keyup.enter="send"
               placeholder="Email"
               autofocus>
        <button type="submit" v-on:click="send" :disabled="!valid">Send Invite</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      email: ''
    }
  },
  computed: {
    valid: function () {
      const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return this.email && re.test(this.email)
    }
  },
  methods: {
    send: function () {
      if (this.valid) {
        axios.post("https://token.modum.io/api/register", {
          email: this.email
        }).then( response => {
          this.$router.push({name: 'step2'})
        }).catch( err => console.log(err) )
      }
    }
  }
}
</script>

