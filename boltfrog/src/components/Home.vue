<template>
  <div>
    <!--left-->
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()" ref="leftBar">
        <mu-list-item v-for="item in items" :title="item" />
        <mu-list-item v-if="docked" @click.native="open = false" title="Close" />
      </mu-list>
    </mu-drawer>
  
    <div ref="rightBar">
      <!--head-->
      <mu-appbar class="headtest" title="Title">
        <mu-icon-button icon='menu' slot="left" @click="toggle()" />
        <mu-icon-menu icon='expand_more' slot="right">
          <mu-menu-item v-for="item in rightItems" :title="item" />
        </mu-icon-menu>
      </mu-appbar>
      <!--context-->
      <div class="test1">
        <p>test</p>
      </div>
      <div class="test2">
        <p>test</p>
      </div>
      <div class="test1">
      </div>
      <div class="test2">
      </div>
      <div class="test1">
      </div>
      <div class="test2">
      </div>
      <!--bottom-->
      <div class="bottomtest">
        <mu-paper>
          <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
            <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video" />
            <mu-bottom-nav-item value="music" title="Music" icon="music_note" />
            <mu-bottom-nav-item value="books" title="Books" icon="books" />
            <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo" />
          </mu-bottom-nav>
        </mu-paper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      open: false,
      docked: true,
      bottomNav: 'movies',
      bottomNavColor: 'movies',
      items: [
        'item1',
        'item4',
        'item3'
      ],
      rightItems: [
        '邀请',
        '退出'
      ]
    }
  },
  methods: {
    toggle(flag) {
      this.open = !this.open
      this.docked = !flag
    },
    handleChange(val) {
      this.bottomNav = val
    }
  }
}

</script>

<style scoped>
.test1 {
  height: 500px;
  background-color: yellow;
}

.test2 {
  height: 500px;
}

.headtest {
  position: fixed;
  top: 0;
  margin: 0;
  padding: 0;
}

.bottomtest {
  position: fixed;
  bottom: 0;
  width: 100%
}
</style>