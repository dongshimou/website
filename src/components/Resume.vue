<template>
    <div id="resume">
        <div class="content" v-html="resume.content">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            resume: {
                "title": "载入失败",
                "author": "skadi",
                "date": "2017-01-01 00:00",
                "tags": ["c", "cpp", "javascript", "python", "csharp"],
                "content": "<p>如果你看到了这个页面,表示载入页面失败了.</p>",
                "iso8601Date": "2017-01-01T00:00:00+08:00",
                "basename": "resume"
            }
        }
    },
    methods: {
        fetchData(para) {
            let address = para + '.json'
            this.$http.get(address).then(res => {
                this.resume = res.body
            }, res => {
                console.log('get resume nerwork error')
            })
        }
    },
    created() {
        this.fetchData(this.$route.path)
    }
}
</script>

<style scoped>
#resume {
    text-align: center;
    margin: 5vh auto;
}

.content {
    min-height: 70vh;
    max-width: 60vw;
    min-width: 300px;
    text-align: left;
    margin: 0 auto;
}
</style>
<style>
.content a {
    color: yellow;
}
.content code{
    color:orangered;
}
.content>h1 {
    border-radius: 5px;
    box-shadow: 0px 0px 1em #000;
}
</style>

