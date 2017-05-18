<template>
    <div>
        this is my homepage
        <ol>
            <li>等待建设</li>
        </ol>
    </div>
</template>

<script>
export default {
    data () {
        return {
            bdata:1
        }
    },
    created () {
        let data={
            'params':{
                'code':'000001'
            }
        }
        this.$http.jsonp('http://127.0.0.1:9090/chat',data).then(res=>{
            console.log('jsonp success')
        },res=>{
            console.log('jsonp fail')
        })
    }
}
</script>

<style>

</style>
