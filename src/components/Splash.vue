<template>
  <transition appear name="fade" mode="out-in">
    <div v-if="popped" key="content">
      <slot/>
    </div>
    <div v-else class="splash" @click="popSplash" key="splash">
      <div class="rubies"></div>
      <img :alt.once="imgTitle" src="../assets/dumpster-diver.svg">
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Splash',
  data() {
    return {
      imgTitle: 'dumpster diver',
      popped: false,
    };
  },
  methods: {
    popSplash() {
      this.popped = true;
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../styles/colors";
  @import "../styles/mixins";
  @import "../styles/extensions";

  $ruby-size: 2.8vw;
  $ruby-pad: 2.2vw;

  div.splash {
    @extend %flex-center;
    @extend %cover-viewport;
    cursor: pointer;

    .rubies {
      @include rhombi($color-scheme, $ruby-size, $ruby-pad);
    }

    img {
      width: 28vw;
      /* keep the dustbin centered */
      margin-left: -44px;
      /* crop to get closer the rubies */
      margin-top: -22px;
      margin-bottom: -22px;
    }
  }
</style>
