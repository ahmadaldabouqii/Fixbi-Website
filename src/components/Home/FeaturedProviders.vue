<template>
  <div class="row box">
    <div class="col-md-6 col-sm-12 col-xs-12">
      <h1>Introducing the Top <br />Featured Providers</h1>
      <button class="btn btn-primary">view all</button>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-8 col-sm-12 col-xs-12">
      <Slider />
    </div>
  </div>
</template>

<style scoped>
.row {
  --bs-gutter-x: 0 !important;
}

.box {
  background-color: #5db846;
  padding: 4em;
  justify-content: center;
  align-items: center;
}

.box > div > h1 {
  color: #ffffff;
}
</style>

<script>
import Slider from './Slider';

export default {
  name: 'FeaturedProviders',
  components: {
    Slider,
  },
};
</script>
