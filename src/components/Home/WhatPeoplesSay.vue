<template>
  <div class="container text-center">
    <h1 class="heading">What Peoples Say</h1>
    <p>
      If the path is beautiful, let us not ask where it leads. my religion is
      very simple. my religion is kindness, each of us has within our power the
      ability to disrupt.
    </p>
    <section className="testimonial-section pb-5" id="testimonials-section">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block pb-3"
              src="../../assets/landing_page/provider_1.png"
              alt="First slide"
            />
            <i className="fas fa-quote-left "></i>
            <div className="mt-3">Managing Director</div>
            <span>Peter Clark </span>
          </div>
          <div className="carousel-item ">
            <img
              className="d-block pb-3"
              src="../../assets/landing_page/provider_2.png"
              alt="First slide"
            />
            <i className="fas fa-quote-left "></i>
            <div className="mt-3">Managing Director</div>
            <span>Peter Clark </span>
          </div>
          <div className="carousel-item">
            <img
              className="d-block pb-3"
              src="../../assets/landing_page/provider_3.png"
              alt="Second slide"
            />
            <i className="fas fa-quote-left "></i>
            <div className="mt-3">Managing Director</div>
            <span>Johon Doe </span>
          </div>
          <div className="carousel-item">
            <img
              className="d-block pb-3"
              src="../../assets/landing_page/provider_2.png"
              alt="Third slide"
            />
            <i className="fas fa-quote-left "></i>
            <div className="mt-3">Managing Director</div>
            <span>Sara James </span>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped src="../../assets/styles/WhatPeoplesSay.css"></style>
