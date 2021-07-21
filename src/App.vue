<template>
  <div id="app">
    <Loader v-if="movies.length == 0" />
    <div>
      <div class="container-fluid">
        <Header
          :menuList="menuList"
          @search="[findMovie($event), findSerie($event)]"
        />
      </div>

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
import Loader from "./components/Loader.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Loader,
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
      films: [], //creo l'array per films per la ricerca
      series: [], //creo l'array per series per la ricerca
      movies: [], //creao l'array per movie popular per visualizzare allo schermo i films
      apiMoviePopular: "movie/popular?api_key=b2ebac52b1c20d4bb5658dd8e16916f7",
      apiFilm:
        "https://api.themoviedb.org/3/search/movie?api_key=b2ebac52b1c20d4bb5658dd8e16916f7&query",
      apiSeries:
        "https://api.themoviedb.org/3/search/tv?api_key=b2ebac52b1c20d4bb5658dd8e16916f7&query",
      startApi: "https://api.themoviedb.org/3/",
    };
  },
  created() {
    this.popularMovieApi();
  },
  methods: {
    popularMovieApi() {
      axios.get(`${this.startApi}${this.apiMoviePopular}`).then((response) => {
        // i dati di API verranno salvati in array di "movies"
        this.movies = response.data.results;
      });
      console.log("Popular Movies")
    },

    findSerie(searchMovie) {
      console.log("FindSerie");
      axios.get(`${this.apiSeries}=${searchMovie}`).then((response) => {
        this.series = response.data.results;
        console.log(response.data.results);
      });
    },

    findMovie(searchMovie) {
      console.log("FindMovie");
      axios.get(`${this.apiFilm}=${searchMovie}`).then((response) => {
        this.films = response.data.results;
        console.log(response.data.results);
      });
    },

    inputEmpty(searchMovie) {
      if (searchMovie.length === 0) {
        alert("not found result");
      }
    },
  },
};
</script>

<style lang="scss">
@import "./style/app.scss";

@import url("https://fonts.googleapis.com/css2?family=Martel+Sans:wght@300;400;600;700&display=swap");
</style>
