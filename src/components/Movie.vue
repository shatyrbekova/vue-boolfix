<template>
  <div class="box-movie">
    <div>
      <img
        src="https://image.tmdb.org/t/p/w342/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg"
        alt=""
      />
    </div>
    <div class="hover-informations-wrapper">
      <div class="hover-informations">
        <div class="title">{{ title }}</div>
        <div class="original-title">{{ originalTitle }}</div>
        <div class="original_language">{{ originalLanguage }}</div>
        <div class="vote_average">{{ voteAverage }}</div>
      </div>
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
  },
};
</script>

<style lang="scss" scoped>
.hover-informations-wrapper {
  position: relative;
}
.hover-informations-wrapper:hover > .hover-informations {
  cursor: pointer;
  display: block;
}
.hover-informations {
  display: none;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  left: 30%;
  transform: translate(-50%, -50%);
}
</style>
