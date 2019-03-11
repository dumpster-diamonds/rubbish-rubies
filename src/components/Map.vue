<template>
  <div class="map">
    <places class="search"
            v-model="search.label"
            :placeholder="search.placeholder"
            :options="search.options"
            :appId="search.appId"
            :apiKey="search.apiKey"
            @change="val => { search.data = val }">
    </places>
    <div class="paper">
      <MglMap v-bind="map"
              :center.sync="center">
        <MglMarker :coordinates.sync="markerCoordinates"
                   :color="marker.color"/>
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
          placeholder: 'where should we look?',
          options: {
            countries: ['IL'],
          },
          appId: process.env.VUE_APP_ALGOLIA_APPLICATION_ID,
          apiKey: process.env.VUE_APP_ALGOLIA_API_KEY,
        },
        map: {
          accessToken: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN,
          mapStyle: process.env.VUE_APP_MAPBOX_MAP_STYLE_MINIMO,
          zoom: 14,
        },
        marker: {
          // color: '#ff68d7',
          // color: '#c868ff',
          color: '#68b4ff',
        },
      };
    },
    computed: {
      center: {
        get() {
          const { data: { latlng = {} } = {} } = this.search;
          return Object.keys(latlng).length ? latlng : {
            lat: 32.0864,
            lng: 34.7795,
          };
        },
        set(val) {

        },
      },
      markerCoordinates() {
        const { lat, lng } = this.center;
        return [lng, lat];
      },
    },
  };
</script>

<style lang="scss">
  @import "../styles/colors";
  @import "../styles/extensions";

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
      flex-grow: 1;
      margin: .666rem 0 0;
    }

    .algolia-places {
      .ap-input,
      .ap-dropdown-menu {
        font-size: .666rem;
        border-radius: 0;
      }

      .ap-input {
        color: $color-bg-1;
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
