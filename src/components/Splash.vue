<template>
  <div class="splash">
    <div class="rubies"></div>
    <img alt="dumpster diver" src="../assets/dumpster-diver.svg">
  </div>
</template>

<script>
export default {
  name: 'Splash',
};
</script>

<style scoped lang="scss">
  @import "../styles/colors";
  @import "../styles/mixins";
  @import "../styles/extensions";

  $ruby-size: 2.8vw;
  $ruby-pad: 2.2vw;

  .splash {
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
