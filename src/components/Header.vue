<template>
  <header class="row">
    <nav class="col-lg-12">
      <div class="logo-menu-container">
        <ul class="logo">
          <li>
            <img src="../assets/Netflix-logo.png" alt="" />
          </li>
        </ul>
        <ul class="menuList">
          <li v-for="element in menuList" :key="element.id">
            <a :href="element.link"> {{ element.name }} </a>
          </li>
        </ul>
      </div>

      <div>
        <ul class="searchBar">
          <li>
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search" v-model="searchMovie" @keyup.enter="$emit('search', searchMovie)">
            <button>Cerca</button>
          </li>
          <li>BAMBINI</li>
          <li>
            <i class="fas fa-bell"></i>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    menuList: Array,
  },
  data(){
      return{
          searchMovie:'',
      }
  }
};
</script>

<style lang="scss" scoped>
header {
  height: 100px;
  color: white;
  nav {
    display: flex;
    justify-content: space-between;
    .logo-menu-container {
      display: flex;
      align-items: center;
      color: white;
    }
    .logo img {
      width: 200px;
    }
    .menuList {
      display: flex;

      li {
        margin-left: 15px;
      }
    }
    .searchBar {
      display: flex;
      align-items: center;
    }
  }
}
</style>
