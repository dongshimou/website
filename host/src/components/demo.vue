<template>
    <div id="demo" :style="{height:demo_height+'px'}">
    </div>
</template>

<script>
export default {
    data() {
        return {
            demo_height: window.innerHeight
        }
    },
    watch: {
        demo_height: (new_height) => {
            this.demo_height = new_height
            console.log(this.demo_height)
        }
    },
    mounted() {
        const that = this
        window.onresize = () => {
            return (() => {
                that.demo_height = window.innerHeight
            })()
        }
    },
    methods: {

    },
    created() {
        let data = {
            'params': {
                'code': '000001'
            }
        }
        this.$http.jsonp('http://127.0.0.1:9090/chat', data).then(res => {
            console.log('jsonp success')
        }, res => {
            console.log('jsonp fail')
        })
    }
}
</script>

<style>

</style>
