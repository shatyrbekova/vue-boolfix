<template>
  <div id="app">
    <div class="container">
      <!-- searchedMovie è una funzione per cercare -->
      <Header
        :menuList="menuList"
        @search="[findMovie($event), findSerie($event)]"
         
      />
       <!-- @search="searchFilm" -->

      <div>
        <!-- ho usato al posto di movies,  filteredMovies  per filtrare -->
        <Main :movies="movies" :films="films" :series="series" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // npm install axios
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
  data: function() {
    //MenuList del Header
    return {
      // il menu di header che verrà inserito come props.
      menuList: [
        { id: 0, name: "Home", link: "#" },
        { id: 1, name: "SerieTV", link: "#" },
        { id: 2, name: "Film", link: "#" },
        { id: 3, name: "Originali", link: "#" },
        { id: 4, name: "Aggiunti di recente", link: "#" },
        { id: 5, name: "La mia lista", link: "#" },
      ],
      films: [],
      series: [],
      movies: [],
    };
  },
  created() {
    this.popularMovieApi();
  },
  methods: {
    popularMovieApi() {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=b2ebac52b1c20d4bb5658dd8e16916f7"
        )
        .then((response) => {
          // i dati di API verranno salvati in array di "movies"
          this.movies = response.data.results;
        });
    },

    searchFilm(searchMovie) {
      if (searchMovie.length === 0) {
        return this.popularMovieApi();
      }

      axios
        .get(
          `https://api.themoviedb.org/3/search/multi?api_key=b2ebac52b1c20d4bb5658dd8e16916f7&query=${searchMovie}`
        )
        .then((response) => {
          this.movies = response.data.results;
        });
      console.log(searchMovie);
    },

    findSerie(searchMovie) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=b2ebac52b1c20d4bb5658dd8e16916f7&query=${searchMovie}`
        )
        .then((response) => {
          this.series = response.data.results;
          console.log(response.data.results)
        });
    },

    findMovie(searchMovie) {
      console.log('hey')
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=b2ebac52b1c20d4bb5658dd8e16916f7&query=${searchMovie}`
        )
        .then((response) => {
          this.films = response.data.results;
          console.log(response.data.results)
        });
    },
  },
};
</script>

<style lang="scss">
@import "./style/app.scss";
@import url("https://fonts.googleapis.com/css2?family=Martel+Sans:wght@300;400;600;700&display=swap");
</style>
