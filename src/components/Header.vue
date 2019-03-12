<template>
  <header>
    <span class="title">{{ title }}</span>
    <nav>
      <ul>
        <li v-for="item of menuItems"
            :class="item.class"
            v-html="item.content"
            @click="menuItemClick(item)"></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title: 'Rubbish Rubies',
      menuItems: [
        {
          content: 'foo',
        },
        {
          content: 'bar',
        },
        {
          content: '&quest;',
          class: 'icon',
        },
      ],
    };
  },
  methods: {
    menuItemClick(event) {
      console.log('menu item clicked!', event);
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../styles/colors";
  @import "../styles/mixins";

  header {
    text-align: left;
    font-weight: 700;
    color: $color-bg;

    > * {
      display: inline-block;
    }

    .title {
      font-size: 1.25em;
      color: $color-fg-main;
    }

    nav {
      float: right;

      ul {
        @include h-list(false);

        li {
          cursor: pointer;

          &:hover {
            color: $color-fg-complement-1;
          }

          &.icon {
            @include icon(1.5em);
          }
        }
      }
    }
  }
</style>
