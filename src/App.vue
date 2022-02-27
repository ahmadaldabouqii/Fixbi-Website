<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from './components/NavBar/Navbar';

export default {
  components: {
    Navbar,
  },
};
</script>
