<template>
  <div id="app">
    <myhead>
      <div class="headclass">
        <!--<router-link class="button-label" :to="{name:'Hello'}">
              hello
            </router-link>-->
        <router-link class="button-label" :to="{name:'Home'}">
          home
        </router-link>
        <router-link class="button-label" :to="{name:'Posts'}">
          posts
        </router-link>
        <router-link class="button-label" :to="{name:'Resume'}">
          about
        </router-link>
      </div>
    </myhead>
    <!--导航-->
    <router-view></router-view>
    <!--正文-->
    <music></music>
    <!--音乐-->
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
  /* background-image: url('./assets/kunkka-wallpaper-hd.jpg'); */
  color: #CCCCCC;
  background-image: url('./assets/star-like-dos.png');
  /* background-image: url('./assets/kimi-no-na-wa-background.jpg'); */
  background-clip: border-box;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  /*背景颜色叠加*/
  /*background-color: rgba(66, 200, 255, 0.4);*/
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: multiply;
}

.button-label {
  min-width: 80px;
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
  /*取消超链接下划线*/
  text-decoration: none;
}

*:focus {
  /*取消选中焦点*/
  outline: none;
}

*,
:after :before {
  box-sizing: border-box;
}
</style>
