<template>
  <div id="app">
    <myhead>
      <div class="headclass">
        <router-link class="button-label" :to="{name:'Hello'}">
          hello
        </router-link>
        <router-link class="button-label" :to="{name:'Home'}">
          home
        </router-link>
      </div>
    </myhead>
    <router-view></router-view>
    <music></music>
  </div>
</template>

<script>
import music from '@/components/Music'
import myhead from '@/components/Head'
export default {
  name: 'app',
  components: {
    music,
    myhead
  },
  data() {
    return {
    }
  },
  created() {

  },
  methods: {
  }
}
</script>
<style scoped>

</style>
<style>
#app {
  font-family: 'Arial', 'Microsoft YaHei';
  overflow: auto;
}

.headclass {
  background-color: rgba(0, 0, 0, 0.8);
  /*border: 2px solid #66ccff;*/
  /*border-radius:10vh;*/
  display: flex;
  justify-content: center;
}

body {
  margin: 0;
  width: 100%;
  background-image: url('../src/assets/kunkka-wallpaper-hd.jpg');
  background-clip: border-box;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
}

.button-label {
  min-width: 100px;
  margin: 5px;
  color: white;
  padding: 5px;
  /*border: 1px solid white;*/
  border-radius: 5px;
  box-shadow: 0px 0px 1em #fff;
}

.button-label:hover {
  transform: scale(1.1, 1.1);
  transition: 0.3s;
}

a {
  text-decoration: none;
}
*:focus {
    outline: none;
}
</style>
