<template>
    <div id="music">
        <audio :src="src" autoplay controls loop >
        </audio>
    </div>
</template>

<script>
export default {
    name:'music',
    data () {
        return {
            music_list:[
                {
                    name:'小时姑娘 - 爱殇.mp3'
                }
            ],
            src:''
        }
    },
    created () {
        let address='./music/'
        let src=address+this.music_list[0].name
        console.log(src)
        this.src=src
    }
}
</script>

<style>
audio{
    align-self: flex-end;
    width: 100%;
}
</style>
