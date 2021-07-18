<template>
  <div class="box-movie">
    <div>
      <img
        src="https://image.tmdb.org/t/p/w342/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg" 
        alt=""
      />
    </div>
  
      <div class="box-informations">
        <div class="title">{{ title }}</div>
        <div class="original-title">{{ originalTitle }}</div>
        <!-- <div class="original_language">{{ originalLanguage }}</div> -->
         <div>
            Language:  <lang-flag :iso="originalLanguage" />
        </div>
        <div class="vote_average">{{ voteAverage }}</div>
      </div>
    </div>

</template>

<script>
export default {
  name: "Movie",
  props: {
    title: String,
    originalTitle: String,
    originalLanguage: String,
    voteAverage: Number,
    posterPath: String,
    iso: String,
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
           font-size: 20px;
           font-weight: bold;
           position: absolute;
           left: 30%;
           bottom:0;
           transform: translate(-50%, -50%);
           color:white;
           display:none;
           padding:14px;
       }
}
 
</style>
