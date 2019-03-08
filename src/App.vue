<template>
  <div id="app">
    <!--<HelloWorld msg="Rubbish Rubies"/>-->
    <div class="rubies"></div>
    <div class="logo">
      <img alt="logo" src="./assets/logo.svg">
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
  @import "./styles/colors";
  @import "./styles/mixins";


  $ruby-colors: (
    $color-fg-complement-1,
    $color-fg-main,
    lightyellow,
    $color-fg-complement-2,
    lightgreen,


  );
  $ruby-size: .777em;
  $ruby-pad: 1.333em;


  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 2em;
    text-align: center;

    @include rhombi('rubies', $ruby-colors, $ruby-size, $ruby-pad);

    .logo {
      img {
        width: 30vw;
        height: 30vw;
        margin-left: -4vw; /* offset to keep the trash-bin centered */
        margin-bottom: -8vw; /* give room for the rubies */
      }
    }
  }
</style>
