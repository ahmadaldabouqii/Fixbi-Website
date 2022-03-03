<template>
  <div class="articles-section">
    <h1>Latest Articles & Tips</h1>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 d-flex flex-column">
          <img
            src="../../assets/landing_page/dubai-construction-cranes-article.jpg"
            alt="dubai-construction"
          />
          <div class="d-flex justify-content-between">
            <span>August 29, 2017</span>
            <span>10:30 pm</span>
          </div>
        </div>
        <div class="col-md-6">
          <Article />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.articles-section {
  padding: 4em;
}
.container {
  background-color: #f6f6f6;
  margin: 0;
}

h1 {
  color: #000000;
  text-align: center;
}
</style>
<script>
import Article from './Article';

export default {
  name: 'Articles',
  components: Article,
};
</script>
