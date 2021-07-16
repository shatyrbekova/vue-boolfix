
<template>
  <div>
    <div>
        <img src="https://image.tmdb.org/t/p/w342/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg" alt="">
    </div>
     <div>
       <div class="title"> {{title  }}  </div>
       <div class="original-title"> {{originalTitle }} </div>
       <div class="original_language"> {{originalLanguage}} </div>
       <div class="vote_average"> {{voteAverage}}  </div>

     </div>
  </div>
</template>

<script>
export default {
    name: 'Movie',
    props:{
      title: String,
      originalTitle: String,
      originalLanguage:  String,
      voteAverage: Number,
    }
}
</script>


<style lang="scss" scoped>

</style>
