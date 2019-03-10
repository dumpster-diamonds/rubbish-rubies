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
  @import "../styles/extensions";
  @import "../styles/mixins";

  $ruby-colors: (
    $color-fg-complement-1,
    $color-fg-main,
    /*#faffbb,*/
    $color-fg-complement-2,
    /*#8cde66,*/
  );
  $ruby-size: 2.8vw;
  $ruby-pad: 2.2vw;

  div.splash {
    @extend %flex-center;
    @extend %cover-viewport;
    cursor: pointer;

    .rubies {
      @include rhombi($ruby-colors, $ruby-size, $ruby-pad);
      margin-top: 2.2vw;
    }

    img {
      width: 28vw;
      /* keep the dustbin centered */
      margin-left: -44px;
      /* crop to get closer the rubies */
      margin-top: -44px;
      margin-bottom: -44px;
    }
  }
</style>
