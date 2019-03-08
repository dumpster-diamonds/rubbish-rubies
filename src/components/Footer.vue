<template>
  <footer>
    <ul>
      <li v-for="item of menuItems">{{ item.title }}</li>
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
          title: 'wat'
        },
        {
          title: 'foo'
        },
        {
          title: 'bar'
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
    opacity: .555;

    ul {
      @include h-list;
    }
  }
</style>
