<template>
  <div id="app">
    <!--<HelloWorld msg="Rubbish Rubies"/>-->
    <Logo/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Logo from './components/Logo.vue';

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Logo,
  },
};
</script>

<style lang="scss">
  @import "./styles/extensions";

  #app {
    @extend %flex-center;

    height: 100%;
    padding: 2em;
    text-align: center;
  }
</style>
