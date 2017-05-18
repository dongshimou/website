<template>
  <div id="app">
    <myhead></myhead>
    <div>
      <router-view></router-view>
    </div>
    <div style="height:500px;;background-color:#66ccff;"></div>
    <div style="height:500px;background-color:#ffcc66;"></div>
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

<style>
#app {
  font-family: 'Microsoft YaHei';
  overflow: auto;
}

body {
  margin: 0;
  width: 100%;
}
</style>
