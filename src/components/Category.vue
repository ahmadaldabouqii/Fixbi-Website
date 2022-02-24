<template>
  <div class="categoriesHolder">
    <div v-for="d in categories" :key="d.id" class="category">
      <img :src="require('../assets/' + d.icon)" :alt="d.title" />
      <h4 class="title">{{ d.title }}</h4>
      <a href="#">View Details</a>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/styles/Category.css';
</style>

<script>
export default {
  name: 'Category',
  props: ['categories'],
};
</script>
