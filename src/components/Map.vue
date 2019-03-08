<template>
  <div class="map">
    <input class="search"/>
    <div class="paper"></div>
  </div>
</template>

<script>
export default {
  name: 'Map',
};
</script>

<style scoped lang="scss">
  @import "../styles/extensions";

  .map {
    @extend %flex-stretch;

    .search {
      width: 100%;
      height: 1.666rem;
      line-height: 1.666rem;
      padding: 0 1em;
      margin: 0 0 1rem;
      font-size: .666em;
    }

    .paper {
      flex-grow: 1;
      width: 100%;
      height: 80%;
      border: 1px dashed #aaa;
    }
  }
</style>
