<template>
  <div id="app" :style="{height:app_height+'px'}">
    <div>
      <router-view></router-view>
    </div>
    <music></music>
  </div>
</template>

<script>
import music from '@/components/Music'

export default {
  name: 'app',
  components: {
    music
  },
  data () {
    return {
      app_height:window.innerHeight
    }
  },
  watch: {
    app_height:(new_height)=>{
      this.app_height=new_height
    }
  },
  created() {
    
  },
  mounted () {
    const that=this
    window.onresize=()=>{
      return(()=>{
        that.app_height=window.innerHeight
      })()
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
body{
  margin: 0;
}
</style>
