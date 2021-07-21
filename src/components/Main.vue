<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h2>ORIGINALI NETFLIX</h2>
      </div>
    </div>

    <div v-if="films.length === 0 && series.length === 0" class="row">
     
      
        <Movie
          class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 pl-0"
          v-for="element in movies"
          :key="element.id"
          :title="element.title"
          :originalTitle="element.original_title"
          :originalLanguage="element.original_language"
          :voteAverage="element.vote_average"
          :poster="element.poster_path"
          :originCountry="element.origin_country"
        />
 
    </div>

    <div v-else>
      <div class="row">
        <div class="col-12">
           <h2>MOVIES</h2>
       </div>
      </div>
       
      <div class="row">
        <Movie
          class="ol-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 "
          v-for="element in films"
          :key="element.id"
          :title="element.title"
          :originalTitle="element.original_title"
          :originalLanguage="element.original_language"
          :voteAverage="element.vote_average"
          :poster="element.poster_path"
        />
      </div>

      <div class="row">
        <div class="col-12">
            <h2>SERIES</h2>
       </div>
      </div>
     
      <div class="row">
        <Movie
          class="ol-12 col-sm-6 col-md-6 col-lg-3 col-xl-3"
          v-for="element in series"
          :key="element.id"
          :title="element.name"
          :originalTitle="element.original_name"
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
    films: Array,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
main {
  h2{
    font-weight:  bold;
    margin-top: 24px;
  }
  color: white;
}
</style>
