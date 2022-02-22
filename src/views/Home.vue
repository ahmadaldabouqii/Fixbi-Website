<template>
  <div class="home">
    <div class="img-container">
      <div>
        <h1 class="img-heading">
          <p>Find the The Service</p>
          <p>&nbsp; &nbsp; You Looking For</p>
        </h1>
      </div>
    </div>
    <FormSearch />
    <Category />
  </div>
</template>

<style scoped>
@import '../assets/styles/Home.css';
</style>

<script>
import FormSearch from '../components/FormSearch.vue';
import Category from '../components/Category.vue';
export default {
  name: 'Home',
  components: {
    FormSearch,
    Category,
  },
};
</script>
