<template>
  <header>
    <span class="title">{{ title }}</span>
    <nav>
      <ul>
        <li v-for="item of menuItems" :class="item.class" v-html="item.content" @click="item.click || null"></li>
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
          click: this.help,
        },
      ],
    };
  },
  methods: {
    help() {
      window.location.href = '/';
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../styles/colors";
  @import "../styles/mixins";

  $icon-size: 1.5em;

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

          &:hover,
          &.icon:hover {
            color: $color-fg-complement-1;
          }

          &.icon {
            width: $icon-size;
            height: $icon-size;
            line-height: calc(#{$icon-size} + 2px);
            margin: 0 .5em;
            padding: 0;
            text-align: center;
            border-radius: 50%;
            color: $color-fg-text;
            background-color: $color-bg;

            &:last-child {
              margin-right: 0;
            }

            &:first-child {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
</style>
