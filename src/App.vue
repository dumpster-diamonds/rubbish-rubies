<template>
  <div id="app" class="app" is="splash">
    <Header class="header"/>
    <Map class="main"/>
    <Footer class="footer"/>
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

  $pad: 2rem;

  .app {
    @extend %flex-stretch;
    @extend %cover-viewport;

    .header,
    .footer,
    .main {
      padding: 0 $pad;
    }

    .header,
    .footer {
      flex-shrink: 0;
      height: $pad;
      min-height: $pad;
      line-height: $pad;
      margin: 0;
      font-size: $pad / 3;
    }

    .main {
      flex-grow: 1;
    }
  }
</style>
