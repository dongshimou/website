<template>
    <div id="resume">
        <p>还在建设中</p>
        {{resume}}
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
</style>
