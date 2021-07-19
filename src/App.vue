<template>
  <div id="app">
      <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <div class="container-fluid">
      <!-- searchedMovie è una funzione per cercare -->
       <Header :menuList="menuList" @search="searchFilm" />
    
        <div class="container">
           <!-- <country-flag country='it' size='big'/>
            <lang-flag iso="en" />
           <country-flag country='it' size='big'/> -->
        <Main :movies="filteredMovies"/>
        </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios" // npm install axios
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";


export default {
  name: 'App',
  components: {
   Header,
   Main
  },
  data: function(){
    //MenuList del Header
    return{
      // il menu di header che verrà inserito come props.
      menuList:[
         {id: 0, name:"Home", link: "#"},
         {id: 1, name:"SerieTV", link: "#"},
         {id: 2, name:"Film", link: "#"},
         {id: 3, name:"Originali", link: "#"},
         {id: 4, name:"Aggiunti di recente", link: "#"},
         {id: 5, name:"La mia lista", link: "#"},
      ],
      filteredMovies:[],
      movies:[ ]

    }
  
      
  
  },
  created(){
    
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=b2ebac52b1c20d4bb5658dd8e16916f7")
       .then((response)=>{
         // i dati di API verranno salvati in array di "movies"
         this.movies = response.data.results;
         //i dati filtrati verranno salvati in un nuovo array "filteredMovies"
         this.filteredMovies = response.data.results;

       })
  },
  methods:{

    //*Funzione per cercare un film, inserendo il titolo;
      searchFilm(searchMovie){
        this.filteredMovies =this.movies.filter((film)=>{
       //? quando inserisco Back non mi esce nienete.
       //*TODO è da migliorare il codice.
              return film.title.toLowerCase().includes(searchMovie.trim()) ||
                     film.title.toUpperCase().includes(searchMovie.trim())

        })
       console.log( searchMovie)
      }

  }

}
</script>

<style lang="scss">
  @import "./style/app.scss";
</style>
