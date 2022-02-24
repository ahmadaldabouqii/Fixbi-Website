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
    <Categories :categories="categories" />
  </div>
</template>

<style scoped>
@import '../assets/styles/Home.css';
</style>

<script>
import FormSearch from '../components/FormSearch';
import Categories from '../components/Categories';

export default {
  name: 'Home',
  components: {
    FormSearch,
    Categories,
  },

  data() {
    return {
      categories: [
        {
          id: '1',
          icon: 'landing_page/categories/Air_Conditioning.png',
          title: 'Air Conditioning',
        },
        {
          id: '2',
          icon: 'landing_page/categories/Automotive.png',
          title: 'Automotive',
        },
        {
          id: '3',
          icon: 'landing_page/categories/Carpenter.png',
          title: 'Carpenter',
        },
        {
          id: '4',
          icon: 'landing_page/categories/Carpet_Wash.png',
          title: 'Carpet Wash',
        },
        {
          id: '5',
          icon: 'landing_page/categories/Construction.png',
          title: 'Construction',
        },
        {
          id: '6',
          icon: 'landing_page/categories/Cleaning.png',
          title: 'Cleaning',
        },
        {
          id: '7',
          icon: 'landing_page/categories/Garden.png',
          title: 'Garden',
        },
        {
          id: '8',
          icon: 'landing_page/categories/Domestic_Appliances.png',
          title: 'Domestic Appliances',
        },
        {
          id: '9',
          icon: 'landing_page/categories/Installation.png',
          title: 'Installation',
        },
        {
          id: '10',
          icon: 'landing_page/categories/Locksmith.png',
          title: 'Locksmith',
        },
        {
          id: '11',
          icon: 'landing_page/categories/Pest_control.png',
          title: 'Pest control',
        },
        {
          id: '12',
          icon: 'landing_page/categories/Planning_Permission.png',
          title: 'Planning Permission',
        },
        {
          id: '13',
          icon: 'landing_page/categories/Pool.png',
          title: 'Pool',
        },
      ],
    };
  },
};
</script>
