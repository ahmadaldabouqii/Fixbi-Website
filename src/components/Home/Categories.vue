<template>
  <div class="holder">
    <h1>Categories</h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    <Category :categories="categories" />
  </div>
</template>

<style scoped>
.holder {
  background-color: #f6f6f6;
  text-align: center;
  padding: 4em;
}

h1 {
  color: #242635;
}

p {
  color: #6d7783;
  font-size: 1.1em;
  font-weight: 500;
}
</style>

<script>
import Category from './Category';

export default {
  name: 'Categories',
  props: ['categories'],
  components: {
    Category,
  },
};
</script>
