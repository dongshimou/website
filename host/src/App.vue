<template>
  <div id="app">
    <myhead class="headclass">
      <h1>this is my home page</h1>
    </myhead>
    <div>
      <router-view></router-view>
      <!--<img src='./assets/kunkka-wallpaper-hd.jpg'>-->
    </div>
    <div style="height:1500px;background-color:rgba(255,200,100,0.3);"></div>
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
.headclass{
  background-color:rgba(100, 205, 200,0.5);
  border: 2px solid #66ccff;
  border-radius:10vh;
}
</style>
<style>
#app {
  font-family: 'Microsoft YaHei';
  overflow: auto;
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
</style>
