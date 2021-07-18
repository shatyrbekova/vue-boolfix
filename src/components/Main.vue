<template>
  <main class="row">

      <h2>ORIGINALI NETFLIX</h2>
      <Movie  class="col-lg-12 m-0" v-for="element in movies" :key="element.id" 
      :title="element.title"
      :originalTitle="element.original_title"
      :originalLanguage="element.original_language"
      :voteAverage="element.vote_average"
      :posterPath="element.poster_path"
      /> 
           

  </main>
</template>

<script>

import Movie from "./Movie.vue";

export default {
  name: "Main",
  components: {
      Movie,
  },
  props: {
    movies: Array,
  },
};
</script>

<style lang="scss" scoped>
.col-lg-12{
    width: calc(100% / 3);
    float:left;
}
main {
  color: white;
}
</style>
