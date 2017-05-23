<template>
  <div id="post">
    <h1>{{post.title}}</h1>
    <h3>{{post.author}}</h3>
    <h3>{{post.date}}</h3>
    <ul>
      <li v-for="tag in post.tags">
        {{tag}}
      </li>
    </ul>
    <div class="content" v-html="post.content">
    </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        "title": "一个无聊的日子里写的无聊日志",
        "author": "skadi",
        "date": "2017-01-01 00:00",
        "tags": ["c", "cpp", "javascript", "python", "csharp"],
        "content": "<p>如果你看到了这个页面,表示载入json失败了.</p>",
        "iso8601Date": "2017-01-01T00:00:00+08:00",
        "basename": "0"
      }
    }
  },
  methods: {
    fetchData(para) {
      let address = para + '.json'
      this.$http.get(address).then(res => {
        this.post = res.body
        // console.log(res.body)
      }, res => {
        // alert("network error");
        // console.log('error',res)
        console.log('nerwork error')
      })
    }
  },
  created() {
    this.fetchData(this.$route.path)
  }
}
</script>

<style scoped>
#post {
  text-align: center;
  margin: 10vh 5vw;
}

.content {
  min-height: 50vh;
  text-align: left;
}

ul {
  display: flex;
  justify-content: center;
  list-style: none;
}

li {
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 5px;
  padding: 1px 5px;
  box-shadow: 0px 0px 1em #000;
}

h3 {
  margin: 0px;
}
</style>
