<template>
  <div class="card cardHolder" style="width: 20rem">
    <div class="row justify-content-center">
      <img class="client-img" :src="image" alt="Card image cap" />
    </div>
    <div class="card-body">
      <div class="col-md-12">
        <span class="name mr-0.5">{{ name }} </span>
        <img src="../../assets/landing_page/check.png" alt="check" />
      </div>
      <div class="col-md-12">
        <span class="status">online</span>
      </div>
      <div class="col-xl-12 col-lg-12 col-xs-12 col-sm-12 col-md-12">
        <img src="../../assets/landing_page/email_icon.png" alt="emailIcon" />
        <span class="email ml-1">{{ email }}</span>
      </div>
      <div class="col-xl-12 col-lg-12 col-xs-12 col-sm-12 col-md-12">
        <span class="since">Member since: {{ memberFrom }}</span>
      </div>
      <div class="col-md-12">
        <span class="views">No. of views: {{ views }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewProviderCard',
  props: {
    views: Number,
    memberFrom: String,
    name: String,
    email: String,
    image: String,
  },
};
</script>

<style scoped>
.cardHolder {
  padding: 2.5em 0;
  border-radius: 0.8em;
}

.views {
  color: #707070;
}

.box {
  background-color: #ffffff !important;
  padding: 1em 0em;
  border-radius: 1em;
}

.since,
.email {
  font-size: 14px;
  font-weight: 500;
}

.status {
  color: #5db846;
  font-size: 13px;
  font-weight: 500;
}

.name {
  font-size: 22px;
  font-weight: 500;
}

h2 {
  font-style: italic;
  color: #000000;
  font-size: 26px;
  text-align: center;
}

.client-img {
  width: 147px !important;
}

h3 {
  font-size: 17px;
  color: #000000;
  margin-bottom: 30px;
  font-style: italic;
  text-align: right;
}

p {
  font-size: 15px;
}

@media (max-width: 576px) {
  .client-img {
    margin: 20px auto;
    position: static;
  }
  h3,
  p {
    text-align: center;
  }
}
</style>
