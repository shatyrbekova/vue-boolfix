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
          <li class="searchbar-hidden">
            <!-- Search bar hidden -->

            <div :style="{ visibility: computedVisibility }">
              <input
                type="search"
                placeholder="Cerca..."
                v-model="searchMovie"
                @keyup.enter="$emit('search', searchMovie)"
              />
            </div>
            <!-- searchMovie è $event -->

            <div :style="{ visibility: computedVisibility }">
              <button type="button" @click="$emit('search', searchMovie)">
                Cerca
              </button>
            </div>
            <!-- @click="showDisplay" -->
          </li>
          <li>
             <i class="fas fa-search" @click="showDisplay"></i>
          </li>
          <li>BAMBINI</li>
          <li>
            <i class="fas fa-bell"></i>
          </li>
          <li class="avatar-box">
         
           <img src="../assets/netflix-avatar.png" alt="">
           <i class="fas fa-sort-down"></i>
          </li>
         
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
  data() {
    return {
      searchMovie: "",
      visibility: "hidden",
    };
  },
  computed: {
    computedVisibility: function() {
      return this.visibility;
    },
  },
  methods: {
    showDisplay() {
      console.log("display");

      if (this.visibility === "visible") {
        this.visibility = "hidden";
      } else if (this.visibility === "hidden") {
        this.visibility = "visible";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 100px;
  color: white;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-menu-container {
      display: flex;
      align-items: center;
      color: white;
    }
    .logo img {
      width: 200px;
    }
    .searchbar-hidden {
      display: flex;
    }
    .menuList {
      display: flex;

      li {
        margin-left: 15px;
        a:hover {
          color: white;
          font-weight: bold;
        }
      }
    }
    .searchBar {
      display: flex;
      align-items:  center;
      i {
        font-size: 22px;
      }
      img{
        width:50px;
      }
    }

    input[type="search"] {
      transition: width 0.35s ease-in-out;
      background: #000; 
      color: white;
      height: 35px;
      border: 1px solid grey;
      text-indent:12px; //Spazio del placeholder dell'input
    }

    input[type="search"]:focus {
      width: 250px;
      outline: none;
    }
      // button cancel dell'input, caricato da bootstrap;
    input[type="text"]::-webkit-search-cancel-button {
        -webkit-appearance: searchfield-cancel-button;
        background: white;    
    }
    button {
      width: 80px;
      height: 35px;
      line-height:35px;
      background: #000;
      color:white;
      border: 1px solid grey;
    }

    .searchBar > * {
      margin-left: 15px;
    }
    .avatar-box img{
       margin-right: 12px;
    }
  }
  .show {
    visibility: visible;
  }
  .hide {
    visibility: hidden;
  }
}
</style>
