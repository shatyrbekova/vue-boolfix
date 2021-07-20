<template>
  <main class="row">
    <h2>ORIGINALI NETFLIX</h2>

    <div v-if="films.length === 0 && series.length === 0">

      <h2>Popular</h2>
      <Movie
        class="col-lg-12 "
        v-for="element in movies"
        :key="element.id"
        :title="element.title"
        :originalTitle="element.original_title"
        :originalLanguage="element.original_language"
        :voteAverage="element.vote_average"
        :poster="element.poster_path"
      />

    </div>
    <!-- <Movie  class="col-lg-12 " v-for="element in movies" :key="element.id" 
      :title="element.title"
      :originalTitle="element.original_title"
      :originalLanguage="element.original_language"
      :voteAverage="element.vote_average"
      :poster="element.poster_path"
      />  -->
    <div v-else>
      <h2>Movies</h2>

      <Movie
        class="col-lg-12 "
        v-for="element in films"
        :key="element.id"
        :title="element.title"
        :originalTitle="element.original_title"
        :originalLanguage="element.original_language"
        :voteAverage="element.vote_average"
        :poster="element.poster_path"
      />

      <h2>Series</h2>
      <div>
        <Movie
          class="col-lg-12"
          v-for="element in series"
          :key="element.id"
          :title="element.title"
          :originalTitle="element.original_title"
          :originalLanguage="element.original_language"
          :voteAverage="element.vote_average"
          :poster="element.poster_path"
        />
      </div>
    </div>
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
    series: Array,
    films: Array
  },
};
</script>

<style lang="scss" scoped>
.col-lg-12 {
  width: calc(100% / 5);
  float: left;
}
main {
  color: white;
}
</style>
