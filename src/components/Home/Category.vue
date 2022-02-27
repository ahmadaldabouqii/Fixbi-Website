<template>
  <div class="categoriesHolder">
    <div v-for="d in categories" :key="d.id" class="category">
      <img :src="require('../../assets/' + d.icon)" :alt="d.title" />
      <span class="title">{{ d.title }}</span>
      <a href="#">View Details</a>
    </div>
  </div>
</template>

<style scoped src="../../assets/styles/Category.css"></style>

<script>
export default {
  name: 'Category',
  props: ['categories'],
};
</script>
