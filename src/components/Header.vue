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
            
              <!-- <i class="fas fa-search" @click="showDisplay" ></i> -->
          
           <form :style="{ visibility: computedVisibility}"  >
               <input
              type="text"
              placeholder="Search"
              v-model="searchMovie"
              @keyup.enter="$emit('search', searchMovie)"
            />
            <!-- searchMovie è $event -->
            <button @click="$emit('search', searchMovie)">Cerca</button>
           </form>
             <i class="fas fa-search" @click="showDisplay" ></i>
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
  data() {
    return {
      searchMovie: "",
     visibility: 'hidden',
    };
  },
   computed: {
        computedVisibility: function() {
            return this.visibility;
        }
    },
  methods:{
  
    showDisplay(){
      console.log('display')
      // this.visible = !this.visible
       if(this.visibility ==='visible'){
                this.visibility = 'hidden';
          }else if(this.visibility==='hidden'){
                this.visibility = 'visible'
          }
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
    align-items: center;
    .logo-menu-container {
      display: flex;
      align-items: center;
      color: white;
    }
    .logo img {
      width: 200px;
    }
    .searchbar-hidden{
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

      i {
        font-size: 22px;
      }
    }
   
    input[type="text"] {
     
      transition: width 0.35s ease-in-out;
    }

    input[type="text"]:focus {
      width: 250px;
      outline: none;
    }
    button {
      width: 80px;
      height: 32px;
    }
    .searchBar > * {
      margin-left: 15px;
    }
  }
   .show {
    visibility: visible
  }
.hide {
    visibility: hidden
  }
}
</style>
