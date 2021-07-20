<template>
  <div class="box-movie">
    <div>

         <img :src=" 'https://image.tmdb.org/t/p/w500/' + this.poster " width="350px"  :alt="this.title">
     
    </div>
  
      <div class="box-informations">
        <div class="title">Titolo:{{ title }}</div>
        <div class="original-title"> Titolo originale: {{ originalTitle }}</div>
        <!-- <div class="original_language">{{ originalLanguage }}</div> -->
         <div>
            Langua:  <lang-flag :iso="originalLanguage" />
        </div>
        <div class="vote_average"> 
       

          <i v-for="i in 5" :key="i" class="fa-star" :class="i <= voteMathRound ? 'fas': 'far' "> </i>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: "Movie",
  data(){
     
     return{
       voteMathRound: Math.round(this.voteAverage / 2)
     }
  },
  props: {
    title: String,
    originalTitle: String,
    originalLanguage: String,
    voteAverage: Number,
    poster: String,
    // iso: String,
  },
};
</script>

<style lang="scss" scoped>
.box-movie {
  position: relative;
  cursor: pointer;

    &:hover .box-informations{
             display:block;
             opacity: 1;
       }
     .box-informations{
            opacity: 1;
           font-size: 20px;
         
           position: absolute;
           left: 40%;
           bottom:0;
           transform: translate(-50%, -50%);
           color:white;
           display:none;
           padding-left:24px;

          .title{
            font-size: 22px;
          }
       }
}
 
</style>
