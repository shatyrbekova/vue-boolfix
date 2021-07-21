<template>
  <div>
    <div
      class="box-movie"
      :style="
        ' background-image:url(' +
          this.image +
          ')'
        
      "
      ml-1
    >
      <div class="box-informations">
        <div class="hover">
          <div class="title">{{ title }}</div>
          <div class="line" />
          <div class="original-title">Titolo originale: {{ originalTitle }}</div>
          <div>Langua: <lang-flag :iso="originalLanguage" /></div>
         
          <div class="vote_average">
            <!-- per visualizzare le stars uso v-for con voteMathRound -->
            <i
              v-for="i in 5"
              :key="i"
              class="fa-star"
              :class="i <= voteMathRound ? 'fas' : 'far '"
            >
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  data() {
    return {
      //nell'Api vote_average parte da 1 a 10, devo trasformare nelle stelle che devono essere da 1 a 5;
      //in questo caso
      voteMathRound: Math.round(this.voteAverage / 2),
    };
  },
  props: {
    title: String,
    originalTitle: String,
    originalLanguage: String,
    voteAverage: Number,
    poster: String,
   
  },
  computed: {
    image() {
      if(this.poster) {
        return 'https://image.tmdb.org/t/p/w500' + this.poster
      } else {
        return require('../assets/not-found-image.jpeg');
      }
    }
  },
  
};
</script>

<style lang="scss" scoped>

.box-movie {
  position: relative;
  cursor: pointer;
  background-size: cover;
  height: 470px;
  margin-bottom: 15px;
  font-family: 'Bebas Neue', cursive;

 
  &:hover .box-informations {
    display: block;
    background: rgba(0, 0, 0, 0.8);
   transition-duration: 4s;
  }
  &:focus .box-informations{
    
  }
  .hover {
    margin-top: 170px;
    color: white;

  }
  
  .box-informations {
    font-size: 20px;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    text-align: center;
    color: white;
    display: none;

    .title {
      font-size: 27px;
      font-weight: bold;
      line-height: 100%;
    }
    .original-title{
      line-height: 100%;
      padding:0 12px;
    }
    .far {
      -webkit-text-stroke-width: 1px;
    }
    .fas {
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: orange;
    }
    .line {
      width: 30%;
      height: 2px;
      margin: 15px auto;
      background: #fff;
    }

  
  }
}
//Google Font per i titoli;
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

</style>
