<template>
  <div class="map">
    <places class="search"
            v-model="search.label"
            v-bind="search.bindings"
            @change="val => { search.data = val }">
    </places>
    <div class="paper">
      <div class="controls">
        <button class="icon" @click="zoomOut">&minus;</button>
        <button class="icon" @click="zoomIn">&plus;</button>
      </div>
      <MglMap v-bind="map"
              :center.once="initialLatLng"
              @load="onMapLoad">
        <MglMarker v-bind="marker"
                   :coordinates.sync="markerCoordinates"/>
      </MglMap>
    </div>
  </div>
</template>

<script>
  import Places from 'vue-places';
  import { MglGeojsonLayer, MglMap, MglMarker } from 'vue-mapbox';

  export default {
    name: 'Map',
    components: {
      Places,
      MglMap,
      MglMarker,
      MglGeojsonLayer
    },
    data() {
      return {
        search: {
          label: null,
          data: {},
          bindings: {
            placeholder: 'where should we look?',
            appId: process.env.VUE_APP_ALGOLIA_APPLICATION_ID,
            apiKey: process.env.VUE_APP_ALGOLIA_API_KEY,
            options: {
              countries: ['IL'],
            },
          },
        },
        map: {
          accessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN,
          mapStyle: process.env.VUE_APP_MAPBOX_MAP_STYLE_MINIMO,
          interactive: false,
          zoom: 13.5,
        },
        marker: {
          // color: '#ff68d7',
          // color: '#c868ff',
          color: '#68b4ff',
        },
        initialLatLng: {
          lat: 32.0864,
          lng: 34.7795,
        },
      };
    },
    methods: {
      async onMapLoad({ map, component }) {
        this.mapboxMap = map;
        this.mapboxActions = component.actions;
      },
      async zoomIn() {
        await this.mapboxActions.zoomIn();
      },
      async zoomOut() {
        await this.mapboxActions.zoomOut();
      },
    },
    computed: {
      center: {
        get() {
          const { data: { latlng = {} } = {} } = this.search;
          return Object.keys(latlng).length ? latlng : this.initialLatLng;
        },
      },
      markerCoordinates() {
        const { lat, lng } = this.center;
        return [lng, lat];
      },
    },
    watch: {
      async center(newVal, oldVal) {
        await this.mapboxActions.flyTo({
          center: newVal,
          speed: 1
        });
      },
    },
  };
</script>

<style lang="scss">
  @import "../styles/colors";
  @import "../styles/mixins";
  @import "../styles/extensions";

  $icon-size: .8rem;

  .map {
    @extend %flex-stretch;

    .search,
    .paper {
      background-color: $color-fg-text;
      box-shadow: 2px 2px 24px #0a0a0a;
    }

    .search {
      height: 1.666rem;
      line-height: 1.666rem;
      padding: 0 1em;
    }

    .paper {
      position: relative;
      flex-grow: 1;
      margin: .666rem 0 0;

      .controls {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        display: flex;
        margin: .5rem;

        .icon {
          @include icon($icon-size);

          font-size: $icon-size * .5;
          line-height: 0;
        }
      }
    }

    .algolia-places {
      .ap-input,
      .ap-dropdown-menu {
        font-size: .666rem;
        border-radius: 0;
      }

      .ap-input {
        color: $color-bg-1;

        &::-webkit-search-cancel-button {
          -webkit-appearance: none;
        }
      }

      .ap-input-icon.ap-icon-clear {
        cursor: pointer;
      }

      .ap-dropdown-menu {
        color: $color-fg-complement-2;
      }

      .ap-footer {
        display: none;
      }
    }

    .mgl-map-wrapper {
      .mapboxgl-ctrl-logo,
      .mapboxgl-ctrl-attrib {
        display: none;
      }
    }
  }
</style>
