<template>
  <main class="container">
    <div class="row">
      <div class="col-lg-12">
        <h2>ORIGINALI NETFLIX</h2>
      </div>
    </div>
    

    <div v-if="films.length === 0 && series.length === 0" class="row" >

      <h2>Popular</h2>
      <Movie
        class="col-12 col-sm-6 col-md-6 col-lg-3 ml-1"
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
       <div class="row">
          <Movie
        class="ol-12 col-sm-6 col-md-6 col-lg-3 "
        v-for="element in films"
        :key="element.id"
        :title="element.title"
        :originalTitle="element.original_title"
        :originalLanguage="element.original_language"
        :voteAverage="element.vote_average"
        :poster="element.poster_path"
      />
       </div>
      

      <h2>Series</h2>
      <div class="row"> 
        <Movie
          class="ol-12 col-sm-6 col-md-6 col-lg-3"
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
 .ml-1{
    margin-left:.5!important;
 }

main {
  color: white;
}
</style>
