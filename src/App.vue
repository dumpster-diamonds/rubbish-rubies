<template>
  <div id="app" class="app" is="splash">
    <Header/>
    <Map class="main"/>
    <Footer/>
  </div>
</template>

<script>
import Splash from './components/Splash';
import Header from './components/Header';
import Map from './components/Map';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Splash,
    Header,
    Map,
    Footer,
  },
};
</script>

<style scoped lang="scss">
  @import "./styles/extensions";

  $pad: 1.666rem;

  .app {
    @extend %flex-stretch;
    @extend %cover-viewport;
    text-align: center;

    header,
    footer {
      flex-shrink: 0;
      height: $pad;
      min-height: $pad;
      line-height: $pad;
      margin: 0;
      padding: 0 $pad;
      font-size: $pad / 3;
    }

    .main {
      @extend %flex-center;
      flex-grow: 1;
      padding: $pad;
    }
  }
</style>
