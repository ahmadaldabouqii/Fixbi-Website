<template>
  <div class="search-form d-flex justify-content-center">
    <form class="form-control-ll bg-white w-75">
      <div class="mt-5 row no-gutter d-flex justify-content-center">
        <div class="form-group col-md-3 customMargin">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Keyword"
            aria-label="Search"
          />
        </div>
        <div class="form-group col-md-3 customMargin">
          <select id="inputState" class="form-control">
            <option selected>Choose Your City</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <select id="inputState" class="form-control">
            <option selected>Choose Your Region</option>
            <option>...</option>
          </select>
        </div>
      </div>
      <div class="mt-3 row no-gutter d-flex justify-content-center">
        <div class="form-group col-md-5 customMargin">
          <select id="inputState" class="form-control">
            <option selected>Choose Your Region</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group col-md-5">
          <select id="inputState" class="form-control">
            <option selected>Choose Your Region</option>
            <option>...</option>
          </select>
        </div>
      </div>
      <div class="mt-4 no-gutter d-flex justify-content-center">
        <button type="submit" class="btn btn-search col-md-2 btn-primary">
          Search
        </button>
        <button type="submit" class="btn col-md-2 btn-success">
          Get Offer
        </button>
      </div>
    </form>
  </div>
</template>
