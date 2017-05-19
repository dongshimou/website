<template>
    <div class="fix_bottom">
        <audio :src="src" autoplay controls loop>
        </audio>
    </div>
</template>

<script>
export default {
    name: 'music',
    data() {
        return {
            music_list: [
                '小时姑娘-爱殇.mp3'
            ],
            src: ''
        }
    },
    created() {
        let address = './music/'
        let src = address + this.music_list[0]
        this.src = src;
        console.log(this.src)

    },
    mounted() {
        const that = this
        that.$el.firstElementChild.volume = 0.5
    }
}
</script>

<style>
audio {
    width: 100%;
}

.fix_bottom {
    width: 100%;
    position: fixed;
    bottom: 0px;
    display: grid;
}
</style>
