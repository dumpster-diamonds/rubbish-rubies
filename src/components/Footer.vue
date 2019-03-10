<template>
  <footer>
    <ul>
      <li v-for="item of menuItems" :class="item.class">
        {{ item.text }}
        <a v-if="item.link" v-bind="item.link">{{ item.link.text }}</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      menuItems: [
        {
          class: 'diamonds',
          link: {
            href: 'https://github.com/dumpster-diamonds',
            title: 'dumpster diamonds',
          },
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
  @import "../styles/mixins";

  footer {
    text-align: right;
    font-size: 1rem;
    color: darken($color-fg-text, 30);

    ul {
      @include h-list;

      .diamonds {
        a {
          display: inline-block;
          @include rhombi($color-scheme, .333rem, 0, false);
          /* rhombi offset fix */
          margin: 0 0 -.2rem;
          padding: .1rem .533rem;
          /* reset default link border */
          border: 0 none;
        }
      }
    }
  }
</style>
