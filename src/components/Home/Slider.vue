<template>
  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div
      id="testimonialCarousel"
      class="carousel slide box"
      data-ride="carousel"
    >
      <!-- Slide Indicators -->
      <ol class="carousel-indicators">
        <li
          data-target="#testimonialCarousel"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#testimonialCarousel" data-slide-to="1"></li>
        <li data-target="#testimonialCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <!-- Slide 1 -->
        <div class="carousel-item active">
          <div class="carousel-content">
            <div class="client-img">
              <img
                src="../../assets/landing_page/provider_1.png"
                alt="Testimonial Slider"
                width="130"
              />
            </div>
            <div class="col-md-12">
              <span class="name mr-0.5">John Doe </span>
              <img src="../../assets/landing_page/check.png" alt="check" />
            </div>
            <div class="col-md-12">
              <span class="status">online</span>
            </div>
            <div class="col-xl-12 col-lg-12 col-xs-12 col-sm-12 col-md-12">
              <img
                src="../../assets/landing_page/email_icon.png"
                alt="emailIcon"
              />
              <span class="email ml-1">mail@gmail.com</span>
            </div>
            <div class="col-xl-12 col-lg-12 col-xs-12 col-sm-12 col-md-12">
              <span class="since">Member since: February 12, 2021</span>
            </div>
            <div class="col-md-12">
              <span class="views">No. of views: 3</span>
            </div>
            <h3><span></span><span></span></h3>
          </div>
        </div>
        <!-- Slide 2 -->
        <div class="carousel-item">
          <div class="carousel-content">
            <div class="client-img">
              <img
                src="../../assets/landing_page/provider_2.png"
                alt="Testimonial Slider"
                width="130"
              />
            </div>
            <div class="col-md-12">
              <span class="name mr-1">Alexander Mahone</span>
              <img src="../../assets/landing_page/check.png" alt="check" />
            </div>
            <div class="col-md-12">
              <span class="status">online</span>
            </div>
            <div class="col-md-12">
              <img src="../../assets/landing_page/email_icon.png" alt="" />
              <span class="email ml-1">mail@gmail.com</span>
            </div>
            <div class="col-md-12">
              <span class="since">Member since: February 12, 2021</span>
            </div>
            <div class="col-md-12">
              <span class="views">No. of views: 3</span>
            </div>
            <h3><span></span><span></span></h3>
          </div>
        </div>
        <!-- Slide 3 -->
        <div class="carousel-item">
          <div class="carousel-content">
            <div class="client-img">
              <img
                src="../../assets/landing_page/provider_3.png"
                alt="Testimonial Slider"
                width="130"
              />
            </div>
            <div class="col-md-12">
              <span class="name mr-1">Michael Scofield</span>
              <img src="../../assets/landing_page/check.png" alt="check" />
            </div>
            <div class="col-md-12">
              <span class="status">online</span>
            </div>
            <div class="col-md-12">
              <img src="../../assets/landing_page/email_icon.png" alt="" />
              <span class="email ml-1">mail@gmail.com</span>
            </div>
            <div class="col-md-12">
              <span class="since">Member since: February 12, 2021</span>
            </div>
            <div class="col-md-12">
              <span class="views">No. of views: 3</span>
            </div>
            <h3><span></span><span></span></h3>
          </div>
        </div>
        <!-- Slider pre and next arrow -->
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  margin: 0px auto;
  position: absolute;
  left: -34px;
  width: 100px !important;
}

.carousel-content {
  padding: 20px 0px 0px 100px;
  width: 70%;
  margin: 0 auto;
  position: relative;
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

.carousel-control-prev,
.carousel-control-next {
  font-size: 36px;
}

.carousel-indicators {
  bottom: -70px;
}

.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 10px;
  text-indent: 0;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background-color: #ffffff;
  color: white;
}
.carousel-indicators .active {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 10px;
  background-color: #ffffff;
}

@media (max-width: 576px) {
  .carousel-content {
    padding: 20px 0px 20px 0px;
    width: 100%;
  }
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
