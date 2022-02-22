<template>
  <div @mouseover="fetchCategories">Helloooo</div>
</template>

<script>
export default {
  data() {
    return {
      Categories: '',
    };
  },

  methods: {
    async fetchCategories() {
      const res = await fetch('../../Categories.json');
      const data = await res.json();
      const { ...Categories } = data;
      this.Categories = Categories.Categories;
    },
  },
};
</script>
