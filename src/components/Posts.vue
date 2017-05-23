<template>
    <div id="posts">
        <div class="post" v-for="item in list">
            <router-link :to="{name:'Post',params:{title:item.basename}}">
                <h3>{{item.title}}</h3>
                <h5>{{item.author}}</h5>
                <h5>{{item.date}}</h5>
                <div v-text="item.content"></div>
            </router-link>
        </div>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    "title": "载入失败",
                    "author": "skadi",
                    "date": "2017-01-01 00:00",
                    "tags": ["日常", "无聊"],
                    "content": "如果你看到这个了,表明载入失败了",
                    "iso8601Date": "2017-01-01T00:00:00+08:00",
                    "basename": "0"
                }
            ]
        }
    },
    methods: {
        fetchData(para) {
            let address = para + '/list.json'
            this.$http.get(address).then(res => {
                this.list=res.body
                console.log('无限载入,等待建设')
                // console.log(res.body)
            }, res => {
                // alert("network error");
                // console.log('error',res)
                console.log('nerwork error')
            })
        }
    },
    created() {
        // console.log(this.$route)
        this.fetchData(this.$route.path)
    }
}
</script>

<style scoped>
#posts {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
}

.post {
    width: 70vw;
    /*div 居中*/
    margin: 10vh auto;
}

a {
    color: black;
}

h5,
h3 {
    margin-top: 0;
    margin-bottom: 0;
}
</style>
<style>

</style>
