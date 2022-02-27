<template>
  <div class="box row">
    <h1>New Providers</h1>
    <NewProviderCard
      :name="`John Doe`"
      :email="`mail@gmail.com`"
      :memberFrom="`February 12, 2021`"
      :views="3"
    />
    <NewProviderCard
      :name="`Michel Scofield`"
      :email="`mail@gmail.com`"
      :memberFrom="`February 12, 2021`"
      :views="4"
    />
    <NewProviderCard
      :name="`Alexander Mahone`"
      :email="`mail@gmail.com`"
      :memberFrom="`February 12, 2021`"
      :views="5"
    />
  </div>
</template>

<style scoped>
h1 {
  color: #ffffff;
  text-align: center;
  margin: 0 0 1em 0;
}

.box {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  margin: 1em 0 0 0;
  padding: 3em;
  background-color: #5db846;
}
</style>

<script>
import NewProviderCard from '../Home/NewProviderCard';

export default {
  name: 'NewProvider',
  components: {
    NewProviderCard,
  },
};
</script>
