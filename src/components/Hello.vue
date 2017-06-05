<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Study Website</h2>
    <ul>
      <li v-for="item in Studyweb">
        <a :href="item.a" target="_blank">{{item.name}}
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li v-for="item in Ecosystem">
        <a :href="item.a" target="_blank">{{item.name}}
        </a>
      </li>
    </ul>
    <div class="center btn-container">
      <a href="javascript:void(0);" class="btn-test1">
        click me
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to My Vue.js App',
      Ecosystem: [
        {
          name: 'vue-router',
          a: 'http://router.vuejs.org/'
        }, {
          name: 'vuex',
          a: 'http://vuex.vuejs.org/'
        }, {
          name: 'vue-loader',
          a: 'http://vue-loader.vuejs.org/'
        }, {
          name: 'awesome-vue',
          a: 'https://github.com/vuejs/awesome-vue'
        }
      ],
      Studyweb: [
        {
          name: 'MDN',
          a: 'https://developer.mozilla.org/zh-CN/'
        },
        {
          name: 'W3C',
          a: 'https://www.w3schools.com'
        },
        {
          name: 'runjs',
          a: 'http://runjs.cn/code'
        }, {
          name: 'jsfiddle',
          a: 'https://jsfiddle.net/'
        },
        {
          name: 'stackvoerflow',
          a: 'https://stackoverflow.com'
        }, {
          name: 'github',
          a: 'https://github.com'
        }
      ]

    }
  }
}
</script>
<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Montserrat);
.center {
  margin: 0 auto;
}

.btn-container {
  width: 200px;
  padding: 100px;
  background-color: #1a1a1a;
  font-family: 'Montserrat', sans-serif;
}

.btn-test1 {
  position: relative;
  display: block;
  max-width: 300px;
  padding: 10px 20px;
  color: #62BBC1;
  font-size: 24px;
  text-align: center;
  text-decoration: none;
  border: 3px solid #868686;
  overflow: hidden;
  transition: color 150ms ease-in-out 150ms, border-color 300ms ease-out, box-shadow 300ms ease-in-out;
  z-index: 1;

  &.center {
    margin: 0 auto;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: darken(rgba(86, 86, 86, 33), 45%);
    z-index: -1;
    transform: scaleX(0);
    transition: transform 300ms ease-out 200ms;
  }

  &:hover {
    color: white;
    border-color: lighten(#868686, 20%);
    box-shadow: 0 0 16px rgba(255, 255, 255, 0.6);

    &:after {
      transform: scaleX(1);
      transform-origin: 50% 50%;
      transition: transform 300ms ease-out;
    }
  }
}
</style>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 10px 10px;
}

a {
  color: #000;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0px 0px 1em #000;
}

li:hover {
  transform: scale(1.1, 1.1);
  transition: 0.3s;
}

.hello {
  text-align: center;
}
</style>
