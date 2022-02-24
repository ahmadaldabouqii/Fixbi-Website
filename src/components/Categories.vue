<template>
  <div>
    <Category :categories="categories" />
  </div>
</template>

<script>
import Category from '../components/Category';

export default {
  name: 'Categories',
  props: ['categories'],
  components: {
    Category,
  },
};
</script>
