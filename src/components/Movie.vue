<template>
  <div
    class="box-movie"
    :style="
      ' background-image:url(https://image.tmdb.org/t/p/w500' +
        this.poster +
        ')'
    "
  >
    <div class="box-informations">
      <div class="hover">
        <div class="title">{{ title }}</div>
        <div class="line" />
        <div class="original-title">Titolo originale: {{ originalTitle }}</div>
        <!-- <div class="original_language">{{ originalLanguage }}</div> -->
        <div>Langua: <lang-flag :iso="originalLanguage" /></div>
        <div class="vote_average">
          <!-- per visualizzare le stars uso v-for con voteMathRound -->
          <i
            v-for="i in 5"
            :key="i"
            class="fa-star"
            :class="i <= voteMathRound ? 'fas' : 'far'"
          >
          </i>
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
    // iso: String,
  },
};
</script>

<style lang="scss" scoped>
.box-movie {
  position: relative;
  cursor: pointer;
  background-size: cover;
  height: 600px;

  &:hover .box-informations {
    display: block;
    opacity: 0.5;
    background: rgb(68, 67, 67);
  }
  .hover{
      margin-top: 270px;
     
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

    .line{
      width:30%;
      height:2px;
      margin: 15px auto;
      background: #fff;
    }
  }
}
</style>
