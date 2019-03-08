<template>
  <div id="app" @click="popSplash">
    <Header/>
    <transition appear name="fade" mode="out-in">
      <section class="section" :is="section" v-if="section"></section>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Splash from './components/Splash';
import Map from './components/Map';

export default {
  name: 'app',
  data() {
    return {
      section: 'Splash',
    };
  },
  components: {
    Header,
    Footer,
    Splash,
    Map,
  },
  methods: {
    popSplash() {
      this.section = 'Map';
    },
  },
};
</script>

<style lang="scss">
  @import "./styles/extensions";

  $pad: 1.666rem;

  #app {
    @extend %flex-stretch;
    height: 100vh;

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

    .section {
      @extend %flex-center;
      flex-grow: 1;
      padding: $pad $pad 0;
    }
  }
</style>
