<template>
  <div id="app">
<!--     <img src="./assets/logo.png">
    <router-view></router-view>
    <hello></hello> -->
    <v-header></v-header>
    <v-nav></v-nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import Header from './components/header/Header'
import Nav from './components/Nav'
export default {
  name: 'app',
  // components: {
  //   Hello
  // }
  components: {
    'v-header': Header,
    'v-nav': Nav
  }
}
</script>

<style>
#app {

}
</style>
