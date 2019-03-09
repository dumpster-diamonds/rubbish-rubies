<template>
  <header>
    <span class="title">{{ title }}</span>
    <nav>
      <ul>
        <li v-for="item of menuItems" :class="item.class" v-html="item.content" @click="item.click"></li>
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

  header {
    text-align: left;
    font-weight: 700;
    text-shadow: 1px 1px 0 #8f8f8f;
    color: $color-bg;
    background-color: darken($color-fg-text, 42);

    > * {
      display: inline-block;
    }

    .title {
      font-size: 1.5em;
    }

    nav {
      float: right;

      ul {
        @include h-list(false);

        li {
          cursor: pointer;

          &:hover {
            color: darken($color-bg, 100);
          }

          &.icon {
            width: 1.5em;
            height: 1.5em;
            line-height: 1.5em;
            margin: 0 .5em;
            padding: 0;
            text-align: center;
            text-shadow: 0 0 0 #000;
            border-radius: 50%;
            color: $color-fg-text;
            background-color: $color-bg;

            &:last-child {
              margin-right: 0;
            }

            &:first-child {
              margin-left: 0;
            }

            &:hover {
              color: $color-fg-main;
            }
          }
        }
      }
    }
  }
</style>
