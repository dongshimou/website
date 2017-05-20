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
          name:'W3C',
          a:'https://www.w3schools.com'
        },
        {
          name:'runjs',
          a:'http://runjs.cn/code'
        },{
          name:'jsfiddle',
          a:'https://jsfiddle.net/'
        },
        {
          name:'stackvoerflow',
          a:'https://stackoverflow.com'
        },{
          name:'github',
          a:'https://github.com'
        }
      ]

    }
  }
}
</script>

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
  border-radius: 2px 5px;
  box-shadow: 0px 0px 1em #000;
}

.hello {
  text-align: center;
}
</style>
