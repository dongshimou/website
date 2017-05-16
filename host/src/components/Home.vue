<template>
    <div>
        foo
        {{bdata}}
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
            console.log(res)
            this.bdata=res.body
        },res=>{
            this.bdata='error'
        })
        console.log(123)
    }
}
</script>

<style>

</style>
