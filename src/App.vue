<template>
  <div id="app">
    <img v-lazyload src="./assets/logo.png"
        data-src="./assets/logo-success.png"
        data-err="./assets/logo-error.png">

    <img v-lazyload src="./assets/logo.png"
        data-src="./assets/logo-success.png"
        data-err="./assets/logo-error.png">

    <img v-lazyload src="./assets/logo.png"
        data-src="./assets/logo-success.png"
        data-err="./assets/logo-error.png">

    <img v-lazyload src="./assets/logo.png"
        data-src="./assets/logo-success.png"
        data-err="./assets/logo-error.png">

    <img v-lazyload src="./assets/logo.png"
        data-src="./assets/logo-success.png"
        data-err="./assets/logo-error.png">

    <img v-lazyload src="./assets/logo.png"
        data-src="./assets/logo-success.png"
        data-err="./assets/logo-error.png">

    <img v-lazyload src="./assets/logo.png"
        data-src="./assets/logo-success.png"
        data-err="./assets/logo-error.png">

    <img v-lazyload src="./assets/logo.png"
        data-src="./assets/logo-success.png"
        data-err="./assets/logo-error.png">

    <img v-lazyload src="./assets/logo.png"
        data-src="./assets/logo-success.png"
        data-err="./assets/logo-error.png">
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  display: block;
  margin: 1em;
}
</style>
