<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/"
      >&nbsp;&nbsp;<img src="../assets/landing_page/FixBi-Logo.jpg" alt=""
    /></router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="text-center collapse navbar-collapse justify-content-between"
      id="navbarNav"
    >
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link text-dark" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/about"
            >About</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/post-a-job"
            >Post a Job</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/job-listing"
            >Job Listing</router-link
          >
        </li>
      </ul>
      <form class="form-inline">
        <button class="btn btn-sm btn-outline-primary text-dark" type="button">
          <img src="../assets/landing_page/pdf.png" alt="" /> Download Pdf
        </button>
        &nbsp;
        <button class="btn btn-sm btn-success" type="button">
          Login/Register
        </button>
        &nbsp;
      </form>
    </div>
  </nav>
</template>
