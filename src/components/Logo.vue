<template>
  <div class="logo">
    <div class="rubies"></div>
    <img alt="dumpster diver" src="../assets/dumpster-diver.svg">
  </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style scoped lang="scss">
  @import "../styles/extensions";
  @import "../styles/mixins";

  $ruby-colors: (
    $color-fg-complement-1,
    $color-fg-main,
    $color-fg-complement-2,
  );
  $ruby-size: .777em;
  $ruby-pad: 1.333em;

  .logo {
    @extend %flex-center;

    @include rhombi('rubies', $ruby-colors, $ruby-size, $ruby-pad);

    img {
      width: 33vw;
      height: 33vw;
      margin-left: -4vw; /* offset to keep the trash-bin centered */
      margin-top: -12vh; /* give room for the rubies */
      margin-bottom: -12vh; /* give room for the rubies */
    }
  }
</style>
