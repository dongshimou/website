<template>
    <div id="app_bottom" class="musicContainer">
        <audio ref="audio" autoplay controls :src="src" @ended="randomStart" style="display:none;">
        </audio>

        <div class="title">
            {{src.replace('/static/music/','').replace('.mp3','')}}
        </div>

        <div class="play">
            <label v-if="playOrPause" @click="musicPlay" class="btn-5">
                play
            </label>
            <label v-else @click="musicPlay" class="btn-5">
                pause
            </label>
        </div>

        <div class="next">
            <label @click="musicNext" class="btn-5">
                next
            </label>
        </div>
        <div class="vol">
            <!-- <n3-slider v-model="musicVol" :min="0" :max="10" @change="volChange"></n3-slider> -->
            <label>
                假装自己可以控制音量
            </label>
        </div>
    </div>
</template>

<script>
// import N3components from 'N3-components'
// let { n3Slider } = N3components

///// import 'N3-components/dist/index.min.css'

export default {
    name: 'music',
    components: {
        // n3Slider
    },
    data() {
        return {
            list: [],
            src: '',
            index: 0,
            playOrPause: true,
            musicVol: 5,
            musicTitle:""
        }
    },
    methods: {
        volChange(val) {
            this.$refs.audio.volume = this.musicVol / 10;
        },
        normalStart: function() {
            this.src = this.list[this.index];
        },
        randomStart: function() {
            this.index = Math.floor(Math.random() * this.list.length);
            this.src = this.list[this.index];
        },
        musicPlay: function() {
            // console.log(this.$refs.audio)
            if (this.playOrPause)
                this.$refs.audio.pause();
            else
                this.$refs.audio.play();
            this.playOrPause = !this.playOrPause;
        },
        musicNext: function() {
            this.index += 1;
            if (this.index >= this.list.length)
                this.index = 0;
            this.normalStart();
            this.$refs.audio.play();
        }
    },
    created() {
        let address = '/static/music/list.json'
        // console.log(address)
        this.$http.get(address).then(res => {
            this.list = res.body
            // console.log(this.list)
            // console.log(res.body)
            // this.normalStart()
            this.randomStart();
        }, res => {
            // alert("network error");
            // console.log('error',res)
            console.log('get music list nerwork error')
        })
    },
    mounted() {
        const that = this
        // console.log(that.$refs.audio)
        that.$refs.audio.volume = this.musicVol / 10
        that.$el.style.position = 'fixed'
        document.body.style.marginBottom = that.$el.clientHeight + 'px';
    },
}
</script>

<style>
audio {
    width: 100%;
}
</style>

<style lang="scss">
.musicContainer {
    bottom: 0%;
    @media (min-width: 320px) {
        width:100%;
        left: 0;
    }

    @media (min-width: 760px) {
        width: 70%;
        left: 15%;
    }

    @media (min-width: 900px) {
        width: 40%;
        left: 30%;
    }
    height: 10%;
    display: flex;
    justify-content: center;
    flex-direction: row;
}

.title {
    width: 15%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color:#0EABDE;
}

.play {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.next {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.vol {
    // width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.btn-5 {
    border: 0 solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid;
    outline-color: rgba(255, 255, 255, .5);
    outline-offset: 0px;
    text-shadow: none;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
}

.btn-5:hover {
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
}
</style>

<style lang="css" scoped>
label {
    margin: 5px;
    color: #ababab;
    padding: 5px;
    width: auto;
    height: auto;
    /*border: 1px solid white;*/
    border-radius: 5px;
    box-shadow: 0px 0px 1em #aaa;
}
</style>

