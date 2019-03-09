<template>
  <div class="map">
    <places
      v-model="form.country.label"
      placeholder="where are we going?"
      @change="val => { form.country.data = val }"
      :options="{ countries: ['US'] }">
    </places>
    <div class="paper">
    </div>
  </div>
</template>

<script>
  import Places from 'vue-places';

  export default {
    name: 'Map',
    components: {
      Places,
    },
    data() {
      return {
        form: {
          country: {
            label: null,
            data: {},
          },
        },
      };
    },
  };
</script>

<style lang="scss">
  @import "../styles/extensions";

  .map {
    @extend %flex-stretch;

    input {
      width: 100%;
      height: 1.666rem;
      line-height: 1.666rem;
      padding: 0 1em;
    }

    .paper {
      flex-grow: 1;
      width: 100%;
      height: 80%;
      margin: 1rem 0 0;
      border: 1px dashed #aaa;
    }

    .algolia-places {
      .ap-input,
      .ap-dropdown-menu {
        font-size: .666rem;
        border-radius: 0;
      }

      .ap-footer {
        display: none;
      }

      .ap-input {
      }
    }

  }
</style>
