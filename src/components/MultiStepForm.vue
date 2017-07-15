<template>
  <div>
    <h1>{{ msg }}</h1>
    <signup></signup>
  </div>
</template>

<script>

import SignUp from './SignUp.vue'

export default {
  name: 'multistepform',
  data () {
    return {
      msg: 'multistepform'
    }
  },
  components: {
    signup: SignUp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
